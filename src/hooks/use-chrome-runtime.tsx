import { useState, useEffect } from 'react'

type HistoryItem = chrome.history.HistoryItem[]

export default function useChromeRuntime() {
  const [histories, setHistories] = useState<HistoryItem>([])
  const [startTime, setStartTime] = useState<number>(
    new Date(1970, 1, 1, 0, 0, 0).getTime()
  )

  useEffect(() => {
    chrome.runtime.sendMessage(
      { action: 'fetchHistory', startTime },
      (response: HistoryItem) => setHistories(response)
    )
    setStartTime(new Date().getTime())
  }, [])

  return histories
}
