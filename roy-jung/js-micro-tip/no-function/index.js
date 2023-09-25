function Foo(...args) {
  console.log(this)
  if (this !== window) this.args = args
  else return args
}

// 일반 함수로 사용 -> 프로토타입 프로퍼티가 불필요
// console.log(Foo(2, 3))
// -> this 바인딩은 함수로 쓸 때는 불필요한 정보

// 생성자 함수로 사용
// const foo = new Foo(2, 3)
// console.log(foo)

// 객체 메서드로 할당 -> this를 바인딩
// const bar = {
//   method: Foo
// }

// bar.method(2, 3)
// console.log(bar)

function a() {}
console.dir(a)
