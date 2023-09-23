function renderProduct(product) {
  const resultElem = document.querySelector('#result')
  resultElem.replaceChildren()
  resultElem.insertAdjacentHTML(
    'beforeend',
    `
      <p>${product.name}</p>
      <p>${product.timestamp}</p>
      <p>${product.message}</p>
    `
  )
}

document.querySelector('#selector')?.addEventListener('change', handleChange)

async function fetchProduct(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  const json = await res.json()
  return json
}

async function getProduct(id) {
  const json = fetchProduct(id)
  return json
}

async function handleChange(e) {
  const id = e.target.value
  const product = await getProduct(id)

  renderProduct(product)
}
