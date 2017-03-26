import React from 'react'
import { ThemeProvider } from 'styled-components'
import Link from 'next/link'
import theme from '../utils/theme'
import Logo from '../components/Home/Logo'
import Header from '../components/Home/Header'
import Heading from '../components/Home/Heading'
import Wrapper from '../components/Home/Wrapper'
import Button from '../components/Home/Button'

export default () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header>
        <Logo src="/static/logo.svg" alt="polished" />
        <Heading level={2}>A lightweight toolset for writing styles in JavaScript</Heading>
        <Button href="https://github.com/styled-components/polished"><img src="/static/GitHub-Mark-Light-64px.png" />View on GitHub</Button>
        <Link prefetch href="/docs/"><Button>Docs</Button></Link>
        <div>
          <code>npm install --save polished</code>
        </div>
        <Heading level={3}>Open the console and play around with it!</Heading>
        {/* <div>
          <pre><code>const styles = {
        color: <span>lighten(0.2, '#000')</span>,
        font-size: <span>modularScale(1)</span>,
        [<span>hiDPI(1.5)</span>]: {
          font-size: <span>modularScale(1.25)</span>
        }
      }</code></pre>
          <pre><code>const styles = {
        color: <span>'#333'</span>,
        font-size: <span>'1.33em'</span>,
        <span>'@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min--moz-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 1.5/1), only screen and (min-resolution: 144dpi), only screen and (min-resolution: 1.5dppx)'</span>: {
          font-size: <span>'1.66625em'</span>,
        }
      }</code></pre>
        </div> */}
      </Header>

      <footer>
        <p>Made by <a href="https://github.com/mxstbr">@mxstbr</a>, <a href="https://github.com/bhough">@bhough</a>, <a href="https://github.com/nikgraf">@nikgraf</a> and <a href="https://github.com/styled-components/polished">collaborators</a>.</p>
      </footer>
    </Wrapper>
  </ThemeProvider>
)
