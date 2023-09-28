const cityCodes = {
  title: 'cit',
  more: 'cim',
  tab: 'cib'
}

const countryCodes = {
  title: 'cot',
  more: 'com',
  tab: 'cob'
}

const sightCodes = {
  title: 'sit',
  more: 'sim',
  tab: 'sib'
}

const getClickCode = (page, keyword) => {
  let code
  if (page === 'city') {
    code = cityCodes[keyword]
  } else if (page === 'country') {
    code = countryCodes[keyword]
  } else if (page === 'sight') {
    code = sightCodes[keyword]
  }
  return code
}

console.log(getClickCode('city', 'tab')) // cib
console.log(getClickCode('country', 'title')) // cot
console.log(getClickCode('sight', 'more')) // sim
