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
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <title>polished | A lightweight toolset for writing styles in JavaScript</title>
          <meta name="description" content="A lightweight toolset for writing styles in JavaScript." />

          {/* Twitter Card data */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mxstbr" />
          <meta name="twitter:title" content="✨ polished | A lightweight toolset for writing styles in JavaScript" />
          <meta name="twitter:description" content="A lightweight toolset for writing styles in JavaScript." />
          <meta name="twitter:creator" content="@mxstbr" />
          <meta name="twitter:image" content="https://polished.js.org/static/meta.png" />

          {/* Open Graph data */}
          <meta property="og:title" content="✨ polished | A lightweight toolset for writing styles in JavaScript" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://polished.js.org" />
          <meta property="og:image" content="https://polished.js.org/static/meta.png" />
          <meta property="og:description" content="A lightweight toolset for writing styles in JavaScript." />
          <meta property="og:site_name" content="✨ polished" />

          {/* Inject styles */}
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
