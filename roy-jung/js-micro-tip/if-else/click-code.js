const getClickCode = (page, keyword) => {
  let code
  if (page === 'city') {
    if (keyword === 'title') code = 'cit'
    else if (keyword === 'more') code = 'cim'
    else if (keyword === 'tab') code = 'cib'
  } else if (page === 'country') {
    if (keyword === 'title') code = 'cot'
    else if (keyword === 'more') code = 'com'
    else if (keyword === 'tab') code = 'cob'
  } else if (page === 'sight') {
    if (keyword === 'title') code = 'sit'
    else if (keyword === 'more') code = 'sim'
    else if (keyword === 'tab') code = 'sib'
  }
  return code
}

console.log(getClickCode('city', 'tab')) // cib
console.log(getClickCode('country', 'title')) // cot
console.log(getClickCode('sight', 'more')) // sim
