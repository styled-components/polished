import React from 'react'
import { styleSheet, injectGlobal } from 'styled-components'
import Document, { Head, Main, NextScript } from 'next/document'
import Nav from '../components/Nav';

class MyDocument extends Document {
  static async getInitialProps({ req, renderPage }) {
    const page = renderPage()
    // Make global.utilities work on the server-side
    global.utilities = req.utilities
    return {
      ...page,
      utilities: JSON.stringify(req.utilities),
      style: styleSheet.getCSS(),
    }
  }

  componentWillMount() {
    injectGlobal`
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        color: #222;
        line-height: 1.5;
        font-size: 16px;
        background: #65daa2;
        padding-top: 3em;
      }
    `
  }

  render() {
    return (
      <html>
        <Head>
          <title>My App</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body>
          <Main />
          {/* Make global.utilities work on the client-side (it's aliased to window) */}
          <script dangerouslySetInnerHTML={{
            __html: `window.utilities = ${this.props.utilities}`
          }} />
          <NextScript />
        </body>
      </html>
    )
  }
}


export default MyDocument
