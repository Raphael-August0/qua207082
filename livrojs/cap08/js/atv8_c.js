const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const convenio = document.querySelector("#inConvenio")

const rbSim = document.querySelector("#Sim")
const rbNao = document.querySelector("#Não")

rbNao.addEventListener("change", () => {
    convenio.style.display = "none"
    convenio.value = "naoPossui"
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)

    let taxa = 0.10 
    if (rbSim.checked) {
        if (convenio.value === "Amigos") {
            taxa = 0.20
        } else if (convenio.value === "Saúde") {
            taxa = 0.50
        }
    }

    const desconto = calcularDesconto(valor, taxa)
    const valorFinal = valor - desconto


    resp.innerText = 
        `Desconto: R$ ${desconto.toFixed(2)} (${(taxa * 100).toFixed(0)}%)\n` +
        `Valor a pagar: R$ ${valorFinal.toFixed(2)}`
})


function calcularDesconto(valor, taxa) {
    return valor * taxa
}
