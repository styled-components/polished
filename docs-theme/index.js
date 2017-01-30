const fs = require('fs')
const path = require('path')
const babylon = require('babylon')
const traverse = require('babel-traverse').default
const generate = require('babel-generator').default
const File = require('vinyl')
const vfs = require('vinyl-fs')
const _ = require('lodash')
const concat = require('concat-stream')
const GithubSlugger = require('github-slugger')
const createFormatters = require('documentation').util.createFormatters
const createLinkerStack = require('documentation').util.createLinkerStack
const hljs = require('highlight.js')
const getExamples = require('../helpers').getExamples

module.exports = function (comments, options, callback) {
  const linkerStack = createLinkerStack(options)
    .namespaceResolver(comments, (namespace) => {
      const slugger = new GithubSlugger()
      return `#${slugger.slug(namespace)}`
    })

  const formatters = createFormatters(linkerStack.link)

  hljs.configure(options.hljs || {})

  const sharedImports = {
    imports: {
      slug (str) {
        const slugger = new GithubSlugger()
        return slugger.slug(str)
      },
      shortSignature (section) {
        let prefix = ''
        if (section.kind === 'class') {
          prefix = 'new '
        } else if (section.kind !== 'function') {
          return section.name
        }
        return prefix + section.name + formatters.parameters(section, true)
      },
      signature (section) {
        let returns = ''
        let prefix = ''
        if (section.kind === 'class') {
          prefix = 'new '
        } else if (section.kind !== 'function') {
          return section.name
        }
        if (section.returns) {
          returns = `: ${
            formatters.type(section.returns[0].type)}`
        }
        return prefix + section.name + formatters.parameters(section) + returns
      },
      md (ast, inline) {
        let newAst = ast
        if (inline && ast && ast.children.length && ast.children[0].type === 'paragraph') {
          newAst = {
            type: 'root',
            children: ast.children[0].children.concat(ast.children.slice(1)),
          }
        }
        return formatters.markdown(newAst)
      },
      formatType: formatters.type,
      autolink: formatters.autolink,
      highlight (example) {
        if (options.hljs && options.hljs.highlightAuto) {
          return hljs.highlightAuto(example).value
        }
        return hljs.highlight('js', example).value
      },
    },
  }

  sharedImports.imports.renderSectionList = _.template(fs.readFileSync(path.join(__dirname, 'partials/section_list._'), 'utf8'), sharedImports)
  sharedImports.imports.renderSection = _.template(fs.readFileSync(path.join(__dirname, 'partials/section._'), 'utf8'), sharedImports)
  sharedImports.imports.renderNote = _.template(fs.readFileSync(path.join(__dirname, 'partials/note._'), 'utf8'), sharedImports)
  sharedImports.imports.renderDocs = _.template(fs.readFileSync(path.join(__dirname, 'docs/index._'), 'utf8'), sharedImports)
  sharedImports.imports.renderHome = _.template(fs.readFileSync(path.join(__dirname, 'index._'), 'utf8'), sharedImports)

  const mainTemplate = _.template(fs.readFileSync(path.join(__dirname, 'partials/base._'), 'utf8'), sharedImports)

  const sourcePath = path.join(process.cwd(), 'lib/')
  const exampleFiles = getExamples(sourcePath)
  comments.forEach((comment) => {
    if (comment.kind !== 'note' && new RegExp(comment.name).test(exampleFiles.join('|'))) {
      comment.examples = [] // eslint-disable-line no-param-reassign
      const pathToExample = path.join(sourcePath, exampleFiles.find(exampleFile => exampleFile.indexOf(comment.name)))
      const results = require(pathToExample) // eslint-disable-line global-require, import/no-dynamic-require
      const originalCode = fs.readFileSync(pathToExample.replace('/lib/', '/src/')).toString()
      const ast = babylon.parse(originalCode, {
        sourceType: 'module',
        plugins: [
          'jsx',
          'flow',
          'objectRestSpread',
          'decorators',
          'classProperties',
          'exportExtensions',
          'asyncGenerators',
          'functionBind',
          'functionSent',
          'dynamicImport',
        ],
      })
      traverse(ast, {
        ExportDefaultDeclaration(p) {
          p.node.declaration.elements.forEach((elem, index) => {
            const before = generate(elem, null, originalCode).code
            const after = JSON.stringify(results[index], null, 2).replace(/"/g, '\'')
            if (before.substr(0, 1) === '{') {
              comment.examples.push({
                description: `// Styles as object usage\nconst styles = ${before}\n\n// CSS-in-JS ouput\nconst styles = ${after}`
              })
            } else if (before.substr(0, 10) === 'stringify`') {
              comment.examples.push({
                description: `// styled-components usage\nconst Box = styled.div${before.substr(9, before.length)}\n\n// CSS-in-JS ouput\nconst Box = styled.div${after.replace(/'/g, '`').replace(/\\n|\n/g, '\n')}`
              })
            }
          })
        },
      })
    }
  })

  const pages = [{
    path: 'index.html',
  }, {
    path: 'docs/index.html',
    data: {
      docs: comments,
    },
  }]

  // push assets into the pipeline as well.
  vfs.src([`${__dirname}/assets/**`], { base: __dirname })
    .pipe(concat((files) => {
      callback(null, files.concat(pages.map((page) => {
        const data = Object.assign({}, {
          options,
        }, page.data)
        const compiled = mainTemplate(data)
        return new File({
          path: page.path,
          contents: new Buffer(compiled, 'utf8'),
        })
      })))
    }))
}
