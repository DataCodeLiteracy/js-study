function renderProduct(product) {
  const resultElem = document.querySelector('#result')
  resultElem.replaceChildren()
  resultElem.insertAdjacentHTML(
    'beforeend',
    `
      <p>${product.title}</p>
      <p>${product.price}</p>
      <p>${product.description}</p>
      <p><img src="${product.images}" style="width=300px;"/></p>
      <p>${product.creationAt}</p>
      <p>${product.updatedAt}</p>
    `
  )
}

const fetchJson = (url) => fetch(url).then((res) => res.json())
const fetchProduct = (id) =>
  fetchJson(`https://api.escuelajs.co/api/v1/products/${id}`)

const getProduct = (id) => {
  //  (...)사전 준비 코드 생략
  const json = fetchProduct(id)
  return json
}

const handleChange = async (e) => {
  const id = e.target.value
  const product = await getProduct(id)

  renderProduct(product)
}

document.querySelector('#selector')?.addEventListener('change', handleChange)

// 중간 과정에서는 async / await가 없어도 무방하다.
// 간단하게 then으로 처리할 수 있는 경우에도 없애도 된다.
