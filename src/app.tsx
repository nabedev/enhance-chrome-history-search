/** @jsx jsx */
import React from 'react'
import { CacheProvider, jsx } from '@emotion/react'
import createCache from '@emotion/cache'

import Layout from './components/layout'

interface Props {
  emotionMountPoint: HTMLElement
}

const App: React.FC<Props> = ({ emotionMountPoint }) => {
  const emotionCache = createCache({
    key: 'my-prefix-key',
    container: emotionMountPoint
  })

  return <CacheProvider value={emotionCache}>
    <Layout />
  </CacheProvider>
}

export default App
