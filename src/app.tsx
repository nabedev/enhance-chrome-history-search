/** @jsx jsx */
import { jsx, ThemeProvider, Heading } from 'theme-ui'
import React from 'react'

import theme from './theme.js'
import Layout from './components/layout'

console.log(theme)

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Heading>hoge</Heading>
  </ThemeProvider>
)

export default App
