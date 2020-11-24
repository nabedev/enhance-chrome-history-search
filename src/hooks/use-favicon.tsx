import { useState, useEffect } from 'react'

type HistoryItem = chrome.history.HistoryItem[]

export default function useFavicon (histories: HistoryItem) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const attachedFaviconHistories = histories.map(history => {
      chrome.runtime.sendMessage(
        { action: 'fetchFavicon', url: history.url },
        response => history['favicon'] = response
      )
      return history
    })
    setItems(attachedFaviconHistories)
  }, [histories])

  return items
}
