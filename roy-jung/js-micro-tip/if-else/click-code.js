const clickCodes = {
  city_title: 'cit',
  city_more: 'cim',
  city_tab: 'cib',
  country_title: 'cot',
  country_more: 'com',
  country_tab: 'cob',
  sight_title: 'sit',
  sight_more: 'sim',
  sight_tab: 'sib'
}

const getClickCode = (page, keyword) => clickCodes[page + '_' + keyword]

console.log(getClickCode('city', 'tab')) // cib
console.log(getClickCode('country', 'title')) // cot
console.log(getClickCode('sight', 'more')) // sim
