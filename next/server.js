const { createServer } = require('http')
const next = require('next')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const url = parse(req.url)
    // eslint-disable-next-line no-param-reassign
    req.utilities = { hello: 'world' }
    handle(req, res)
  })
  .listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
