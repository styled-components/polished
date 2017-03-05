import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps({ req, renderPage }) {
    const page = renderPage()
    // Make global.utilities work on the server-side
    global.utilities = req.utilities
    return {
      ...page,
      utilities: JSON.stringify(req.utilities),
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>My App</title>
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
