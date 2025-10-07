const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value

    if (validarNome(nome) == false) {
        alert("Nome incompleto")
        return
    }

    const sobrenome = obterSobrenome(nome)
    const vogais = contarVogais(nome)
    resp.innerText = `Senha Inicial: ${sobrenome}${vogais}`
})

function validarNome(nome) {
    return nome.match(/ /g) != null
}

function obterSobrenome(nome) {
    const nomes = nome.trim().split(' ')
    return nomes[nomes.length - 1].toLowerCase()
}

function contarVogais(nome) {
    const vogais = nome.match(/[aeiouAEIOU]/g)
    return String(vogais ? vogais.length : 0).padStart(2, "0")
}
