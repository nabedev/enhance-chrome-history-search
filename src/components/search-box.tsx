/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react'
import React, { Fragment, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Fuse from 'fuse.js'

import useChromeRuntime from '../hooks/use-chrome-runtime'
import useHistoryFilter from '../hooks/use-history-filter'
import useFavicon from '../hooks/use-favicon'
import Flex from './flex'
import Input from './input'
import Divider from './divider'
import List from './list'

const SearchBox: React.FC = () => {
  const theme = useTheme()
  const chromeHistories = useChromeRuntime()
  const filterdChromeHistories = useHistoryFilter(chromeHistories)
  const attachedFaviconHitories = useFavicon(filterdChromeHistories)

  const [filterdHistories, setFilterdHistories] = useState<
    chrome.history.HistoryItem[]
  >([])
  const handleChange = (event) => {
    const options = {
      useExtendedSearch: true,
      keys: ['url']
    }
    console.log(attachedFaviconHitories)
    const fuse = new Fuse(attachedFaviconHitories, options)
    const results = fuse.search(`'${event.target.value}`)
    const histories = results.map((result) => result.item)
    setFilterdHistories(histories)
  }

  return (
    <>
      <Flex css={{ alignItems: 'center', fontSize: '32px' }}>
        <BiSearch css={{ color: theme.colors.grey }} />
        <Input placeholder="search" onChange={handleChange} />
      </Flex>

      {filterdHistories.length > 0 && (
        <>
          <Divider />
          <List histories={filterdHistories} />
        </>
      )}
    </>
  )
}

export default SearchBox
