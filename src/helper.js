function chunkArray (arr, chunkSize) {
  var myArray = [...arr]
  var results = []
  while (myArray.length) {
    results.push(myArray.splice(0, chunkSize))
  }

  return results
}

function transformCountriesList (items, perPage) {
  const data = {
    totalItems: 0,
    totalPages: 0,
    perPage: 0,
    items: []
  }
  data.totalItems = items.length
  data.perPage = perPage
  data.items = chunkArray(items, perPage)
  data.totalPages = data.items.length

  return data
}

export { chunkArray, transformCountriesList }
