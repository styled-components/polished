const fs = require('fs')
const path = require('path')
const File = require('vinyl')
const vfs = require('vinyl-fs')
const _ = require('lodash')
const concat = require('concat-stream')
const GithubSlugger = require('github-slugger')
const createFormatters = require('documentation').util.createFormatters
const LinkerStack = require('documentation').util.LinkerStack
const hljs = require('highlight.js')

function isFunction(section) {
  return (
    section.kind === 'function' ||
    (section.kind === 'typedef' &&
      section.type.type === 'NameExpression' &&
      section.type.name === 'Function')
  )
}

module.exports = function (comments, config, callback) {
  const linkerStack = new LinkerStack(config).namespaceResolver(
    comments,
    function (namespace) {
      const slugger = new GithubSlugger()
      return '#' + slugger.slug(namespace)
    }
  )

  const formatters = createFormatters(linkerStack.link)

  hljs.configure(config.hljs || {})

  const sharedImports = {
    imports: {
      slug(str) {
        let slugger = new GithubSlugger()
        return slugger.slug(str)
      },
      shortSignature(section) {
        let prefix = ''
        if (section.kind === 'class') {
          prefix = 'new '
        } else if (!isFunction(section)) {
          return section.name
        }
        return prefix + section.name + formatters.parameters(section, true)
      },
      signature(section) {
        let returns = ''
        let prefix = ''
        if (section.kind === 'class') {
          prefix = 'new '
        } else if (!isFunction(section)) {
          return section.name
        }
        if (section.returns.length) {
          returns = ': ' + formatters.type(section.returns[0].type)
        }
        return prefix + section.name + formatters.parameters(section) + returns
      },
      md(ast, inline) {
        if (
          inline &&
          ast &&
          ast.children.length &&
          ast.children[0].type === 'paragraph'
        ) {
          ast = {
            type: 'root',
            children: ast.children[0].children.concat(ast.children.slice(1))
          }
        }
        return formatters.markdown(ast)
      },
      formatType: formatters.type,
      autolink: formatters.autolink,
      highlight(example) {
        if (config.hljs && config.hljs.highlightAuto) {
          return hljs.highlightAuto(example).value
        }
        return hljs.highlight('js', example).value
      }
    }
  }

  sharedImports.imports.renderSectionList = _.template(fs.readFileSync(path.join(__dirname, 'partials/section_list._'), 'utf8'), sharedImports)
  sharedImports.imports.renderSection = _.template(fs.readFileSync(path.join(__dirname, 'partials/section._'), 'utf8'), sharedImports)
  sharedImports.imports.renderNote = _.template(fs.readFileSync(path.join(__dirname, 'partials/note._'), 'utf8'), sharedImports)
  sharedImports.imports.renderDocs = _.template(fs.readFileSync(path.join(__dirname, 'docs/index._'), 'utf8'), sharedImports)
  sharedImports.imports.renderHome = _.template(fs.readFileSync(path.join(__dirname, 'index._'), 'utf8'), sharedImports)

  const mainTemplate = _.template(fs.readFileSync(path.join(__dirname, 'partials/base._'), 'utf8'), sharedImports)

  const pages = [{
    path: 'index.html',
  }, {
    path: 'docs/index.html',
    data: {
      docs: comments,
    },
  }]

  const pageTemplate = _.template(
    fs.readFileSync(path.join(__dirname, 'index._'), 'utf8'),
    sharedImports
  )

  // push assets into the pipeline as well.
  return new Promise(resolve => {
    vfs.src([`${__dirname}/assets/**`, `${__dirname}/favicon.png`], { base: __dirname })
      .pipe(concat(function (files) {
        resolve(
          files.concat(
            pages.map((page) => {
              const data = Object.assign({}, {
                config,
              }, page.data)
              const compiled = mainTemplate(data)
              return new File({
                path: page.path,
                contents: Buffer.from(compiled, 'utf8'),
              })
            })
          )
        )
      })
      )
  })
}
