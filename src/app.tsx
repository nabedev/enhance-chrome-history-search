/** @jsx jsx */
import React from 'react'
import { CacheProvider, jsx, ThemeProvider } from '@emotion/react'
import createCache from '@emotion/cache'

import Layout from './components/layout'
import SearchBox from './components/search-box'
import { theme } from './theme.js'

interface Props {
  emotionMountPoint: HTMLElement
}

const App: React.FC<Props> = ({ emotionMountPoint }) => {
  const emotionCache = createCache({
    key: 'my-prefix-key',
    container: emotionMountPoint
  })

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Layout>
          <SearchBox />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
