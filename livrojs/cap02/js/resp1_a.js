const frm = document.querySelector('form')
const resp = document.querySelector('#inPromo')

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inNome.value
    const valor = Number(frm.inPreco.value)

    const promocao = Math.floor (valor + valor)
    resp.innerText = `Promoção de ${medicamento} \n Leve duas por apenas ${promocao.toFixed(2)}`
    
    
    e.preventDefault()
})