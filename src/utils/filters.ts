/*
  Search history only that passed the filter function defined here.
*/

const isNotGoogleSearchPage = (history) => {
  return !history.url.startsWith('https://www.google.com/search')
}

export default [isNotGoogleSearchPage]
