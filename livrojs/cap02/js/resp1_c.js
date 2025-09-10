const frm = document.querySelector('form')
const resp = document.querySelector('#inValor')

frm.addEventListener("submit", (e) => {

  const produto = frm.inProduto.value
  const preco = Number(frm.inPreco.value)

  const total = (2.5 * preco).toFixed(2)

  resp.innerText = `Promoção: Leve 3 unidades de ${produto} \n Pague apenas R$ ${total}`
    
    
    e.preventDefault()
})