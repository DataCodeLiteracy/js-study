/*
  - 3월 ~ 5월 : 봄
  - 6월 ~ 8월 : 여름
  - 9월 ~ 11월 : 가을
  - 12월 ~ 2월 : 겨울
*/

const getSeason = (month) => {
  switch (month) {
    case 3:
    case 4:
    case 5:
      return '봄'
    case 6:
    case 7:
    case 8:
      return '여름'
    case 9:
    case 10:
    case 11:
      return '가을'
    case 12:
    case 1:
    case 2:
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
