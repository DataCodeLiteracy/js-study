/*
  - 3월 ~ 5월 : 봄
  - 6월 ~ 8월 : 여름
  - 9월 ~ 11월 : 가을
  - 12월 ~ 2월 : 겨울
*/

const getSeason = (month) => {
  const shiftedMonth = Math.floor(((month + 9) % 12) / 3)
  switch (shiftedMonth) {
    case 0:
      return '봄'
    case 1:
      return '여름'
    case 2:
      return '가을'
    case 3:
      return '겨울'
    default:
      return
  }
}

console.log(getSeason(2))
console.log(getSeason(5))
console.log(getSeason(7))
console.log(getSeason(10))
console.log(getSeason(12))
