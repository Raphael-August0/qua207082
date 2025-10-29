const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit",(e) => {
    e.preventDefault()
    const nome = frm.inNome.value.trim()
    if(nome.includes(" ") == false){
        alert("Informe o nome completo...")
        return
    }
    const priEspaco = nome.indexOf(" ")
    const ultEspaco = nome.lastIndexOf(" ")
    const cracha = nome.substr(0,priEspaco)+nome.substr(ultEspaco)
    resp.innerText = cracha
})