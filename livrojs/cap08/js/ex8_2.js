const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    const classificacao = classificarVeiculo(ano)
    const entrada = calcularEntrada(preco, classificacao)
    const parcela = (preco - entrada)/10
    resp1.innerText = modelo+" - "+classificacao
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
    resp3.innerText = `Parcela R$: ${parcela.toFixed(2)} x 10`
})
function classificarVeiculo(ano){
    const anoAtual = new Date().getFullYear()
    if(ano == anoAtual){
        return "Novo"
    }else if(ano >= Number(anoAtual)-2){
        return "Seminovo"
    }else {
        return "Usado"
    }
}
const calcularEntrada = (preco, classificacao) => {
    if(classificacao == "Novo"){
        return preco * 0.5
    }else{
        return preco * 0.3
    }
}
