import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'

export default () => (
  <ThemeProvider theme={theme}>
    <div>
      <h1>Hello World!</h1>
    </div>
  </ThemeProvider>
)
