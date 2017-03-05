/**
 * Theme for documentation.js, which injects the ToC of the real docs into the README. Note: This is
 * hacky, as this is meant for HTML themes, but it works!
 */
const fs = require('fs')
const path = require('path')
const GithubSlugger = require('github-slugger')

const slugger = new GithubSlugger()
const isHeading = (comment) => comment.kind === 'note'
const DOCS_SECTION = /(<!-- INJECT DOCS START -->)(.|\n)+(<!-- INJECT DOCS END -->)/gi
const createLink = (text, slug) => `<a href="http://polished.js.org/docs/#${slug}">${text}</a>`

module.exports = (comments, options, callback) => {
  // Create the ToC to be injected into the README
  let firstNote = true
  const toc = comments
    .filter(comment => comment.markdown !== false)
    .map(comment => {
    const slug = slugger.slug(comment.name)
    if (isHeading(comment)) {
      let prepend = '  </ul>\n</details>\n'
      // The first note does not need to prepend </details>
      if (firstNote) {
        firstNote = false
        prepend = ''
      }
      return `${prepend}<details open>\n  <summary>${comment.name}</summary>\n  <ul>`
    }
    return `    <li>${createLink(comment.name, slug)}</li>`
  }).join('\n')


  // Put the ToC into the README and write back to file
  const readme = fs.readFileSync(path.resolve('README.md')).toString()
  const newReadme = readme.replace(DOCS_SECTION, `<!-- INJECT DOCS START -->\n${toc}\n  </ul>\n</details>\n<!-- INJECT DOCS END -->`)
  fs.writeFileSync(path.resolve('README.md'), newReadme)
  callback(null, [])
}
