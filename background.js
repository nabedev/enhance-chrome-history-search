chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'fetchHistory') {
    chrome.history.search({ text: '', startTime: 0 }, function (data) {
      sendResponse(data)
    })
  }

  if (request.action === 'fetchFavicon') {
    const xhr = new XMLHttpRequest()
    xhr.onload = (data) => {
      const reader = new FileReader()
      reader.onloadend = (file) => {
        const base64 = btoa(file.target.result)
        sendResponse(`data:image/png;base64,${base64}`)
      }
      reader.readAsBinaryString(data.target.response)
    }
    xhr.open('GET', `chrome://favicon/${request.url}`)
    xhr.responseType = 'blob'
    xhr.send()
  }

  return true
})
