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

const getClickCode = (page, keyword) => clickCodes[page]?.[keyword]

console.log(getClickCode('city', 'tab')) // cib
console.log(getClickCode('country', 'title')) // cot
console.log(getClickCode('sightㅅ', 'more')) // sim
