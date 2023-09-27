// 객체 메서드
const obj1 = {
  name: '종현',
  method: function () {
    console.log(this.name)
  }
}

const obj2 = {
  name: '한결',
  method() {
    console.log(this.name)
  }
}

console.dir(obj1.method)
console.dir(obj2.method)
