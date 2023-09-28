const clickCodes = {
  city: {
    title: 'cit',
    more: 'cim',
    tab: 'cib'
  },
  country: {
    title: 'cot',
    more: 'com',
    tab: 'cob'
  },
  sight: {
    title: 'sit',
    more: 'sim',
    tab: 'sib'
  }
}

const getClickCode = (page, keyword) => {
  let code
  if (page === 'city') {
    code = clickCodes.city[keyword]
  } else if (page === 'country') {
    code = clickCodes.country[keyword]
  } else if (page === 'sight') {
    code = clickCodes.sight[keyword]
  }
  return code
}

console.log(getClickCode('city', 'tab')) // cib
console.log(getClickCode('country', 'title')) // cot
console.log(getClickCode('sight', 'more')) // sim
