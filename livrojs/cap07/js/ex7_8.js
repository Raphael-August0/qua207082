const frm = document.querySelector("form")
const TAXA_MULTA = 2/100
const TAXA_JUROS = 0.33/100
frm.addEventListener("submit",(e) => {
    e.preventDefault()
    const dtVencimento = frm.inVenc.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date()
    const vencimento = new Date()
    const parte = dtVencimento.split("-") 
    vencimento.setDate(Number(parte[2]))
    vencimento.setMonth(Number(parte[1])-1)
    vencimento.setFullYear(Number(parte[0]))
    const atraso = hoje - vencimento
    let multa = 0
    let juros = 0
    if(atraso > 0){
        const dias = atraso / 86400000
        multa = valor * TAXA_MULTA
        juros = valor * TAXA_JUROS * dias
    }
    const total = valor + multa + juros
    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})