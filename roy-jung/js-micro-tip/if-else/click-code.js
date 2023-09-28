const pageCodes = {
  city: 'ci',
  country: 'co',
  sight: 'si'
}

const keywordCodes = {
  title: 't',
  more: 'm',
  tab: 'b'
}

const getClickCodes = (page, keyword) => pageCodes[page] + keywordCodes[keyword]

console.log(getClickCodes('city', 'tab')) // cib
console.log(getClickCodes('country', 'title')) // cot
console.log(getClickCodes('sight', 'more')) // sim
