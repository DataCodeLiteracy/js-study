/*
  - 0 미만 : 몹시 추워요
  - 0 이상 10 미만 : 추워요
  - 10 이상 20 미만 : 선선해요
  - 20 이상 30 미만 : 조금 더워요
  - 30 이상 40 미만 : 더워요
  - 40 이상 : 몹시 더워요
*/

const getWeather = (temperature) => {
  if (temperature < 0) return '몹시 추워요'
  if (temperature < 10) return '추워요'
  if (temperature < 20) return '선선해요'
  if (temperature < 30) return '조금 더워요'
  if (temperature < 40) return '더워요'
  return '몹시 더워요'
}

console.log(getWeather(-15))
console.log(getWeather(5))
console.log(getWeather(15))
console.log(getWeather(25))
console.log(getWeather(35))
console.log(getWeather(55))
