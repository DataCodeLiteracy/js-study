/*
  - 3월 ~ 5월 : 봄
  - 6월 ~ 8월 : 여름
  - 9월 ~ 11월 : 가을
  - 12월 ~ 2월 : 겨울
*/

const Seasons = ['봄', '여름', '가을', '겨울']
const getSeasonIndex = (month) => Math.floor(((month + 9) % 12) / 3)

const getSeason = (month) => Seasons[getSeasonIndex(month)]

console.log(getSeason(2))
console.log(getSeason(5))
console.log(getSeason(7))
console.log(getSeason(10))
console.log(getSeason(12))
