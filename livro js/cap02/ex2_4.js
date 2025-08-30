const frm = document.querySelector('form')
const resp = document.querySelector('#inPreco')

frm.addEventListener("submit", (e) => {
    const quilos = frm.inQuilos.value
    const peso = frm.inGramas.value

    const valor = (quilos/1000)*peso
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`
    
    
    e.preventDefault()
})