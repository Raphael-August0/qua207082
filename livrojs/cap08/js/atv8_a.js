const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    resp.innerText = nome + "\n"
    resp.innerText += retornarTracos(nome) + "\n"
    resp.innerText += "Categoria: " + categorizarAluno(idade)
})

function retornarTracos(nome) {
    let retorno = ""
    for (const letra of nome) {
        retorno += (letra != " ") ? "-" : " "
    }
    return retorno
}

function categorizarAluno(idade) {
    return (idade <= 12) ? "Infantil" : (idade <= 17) ? "Juvenil" : "Adulto"
}