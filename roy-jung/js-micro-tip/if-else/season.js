/*
  - 3월 ~ 5월 : 봄
  - 6월 ~ 8월 : 여름
  - 9월 ~ 11월 : 가을
  - 12월 ~ 2월 : 겨울
*/

const SeasonMap = {
  0: '봄',
  1: '여름',
  2: '가을',
  3: '겨울'
}

const getSeason = (month) => {
  const shiftedMonth = Math.floor(((month + 9) % 12) / 3)
  return SeasonMap[shiftedMonth]
}

console.log(getSeason(2))
console.log(getSeason(5))
console.log(getSeason(7))
console.log(getSeason(10))
console.log(getSeason(12))
