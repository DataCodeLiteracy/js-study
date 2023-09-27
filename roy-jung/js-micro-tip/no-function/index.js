// 일반 함수
function foo(...args) {
  console.log(args)
}

// 화살표 함수

const bar = (...args) => {
  console.log(args)
}

console.dir(foo)
console.dir(bar)
