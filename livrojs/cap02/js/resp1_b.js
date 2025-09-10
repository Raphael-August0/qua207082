const frm = document.querySelector('form')
const resp = document.querySelector('#inValor')

frm.addEventListener("submit", (e) => {
    const tempo = frm.inTempo.value
    const valor = Number(frm.inPreco.value)

    const div = Math.ceil(valor/15)
    const total = (div*tempo) 
    resp.innerText = `Valor a pagar: ${total.toFixed(2)}`
    
    
    e.preventDefault()
})