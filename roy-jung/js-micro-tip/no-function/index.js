// 생성자 함수로 사용
function Foo(...args) {
  if (this !== window) this.args = args
  else return args
}
Foo.prototype.getArgs = function () {
  return this.args
}

const foo = new Foo(1, 2)

for (let prop in foo) {
  if (foo.hasOwnProperty(prop)) console.log(prop)
}

// console.dir(foo)

class Bar {
  constructor(...args) {
    if (this !== window) this.args = args
    else return args
  }

  getArgs() {
    return this.args
  }
}

const bar = new Bar(3, 4)

for (let prop in bar) {
  console.log(prop)
}

// console.dir(bar)
