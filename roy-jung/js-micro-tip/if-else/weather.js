/*
  - 0 미만 : 몹시 추워요
  - 0 이상 10 미만 : 추워요
  - 10 이상 20 미만 : 선선해요
  - 20 이상 30 미만 : 조금 더워요
  - 30 이상 40 미만 : 더워요
  - 40 이상 : 몹시 더워요
*/

const getWeather = (temperature) => {
  const shiftedTemperature = Math.floor(temperature / 10)
  switch (shiftedTemperature) {
    case 0:
      return '추워요'
    case 1:
      return '선선해요'
    case 2:
      return '조금 더워요'
    case 3:
      return '더워요'
    default: {
      if (shiftedTemperature < 0) return '몹시 추워요'
      return '몹시 더워요'
    }
  }
}

console.log(getWeather(-15))
console.log(getWeather(5))
console.log(getWeather(15))
console.log(getWeather(25))
console.log(getWeather(35))
console.log(getWeather(55))
