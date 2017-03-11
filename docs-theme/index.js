const fs = require('fs')
const path = require('path')

module.exports = function (comments, options, callback) {
  fs.writeFileSync('next/server-generated.js', `const { parse } = require('url')
const { createServer } = require('http')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const url = parse(req.url, true)
    const { pathname, query } = url
    if (pathname !== '/') {
      // eslint-disable-next-line no-param-reassign
      req.utilities = ${JSON.stringify(comments)}
      if (pathname.startsWith('/docs/util')) {
        app.render(req, res, '/docs/util', query)
        return
      }
    }

    handle(req, res, url)
  })
  .listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
`)
}
