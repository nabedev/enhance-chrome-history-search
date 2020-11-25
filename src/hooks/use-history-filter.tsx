import { useState, useEffect } from 'react'

import filterFunctions from '../utils/filters'

type HistoryItem = chrome.history.HistoryItem[]

export default function useHistoryFilter(histories: HistoryItem) {
  const [filterdHistries, setFilterdHistories] = useState<HistoryItem>([])

  useEffect(() => {
    setFilterdHistories(
      histories.filter((history) =>
        filterFunctions.every((func) => func(history))
      )
    )
  }, [histories])

  return filterdHistries
}
