// generator
function* generator() {
  yield 1
  yield 2
}

const obj = {
  val: [1, 2],
  *gene() {
    yield this.val.shift()
    yield this.val.shift()
  }
}
const gene = obj.gene()
console.log(gene.next().value) // 1
console.log(gene.next().value) // 2
console.log(gene.next().value) // undefined
