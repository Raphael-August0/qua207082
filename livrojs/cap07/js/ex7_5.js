const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit",(e) => {
    e.preventDefault()
    const nome = frm.inNome.value.trim()
    if(nome.includes(" ") == false){
        alert("Informe o nome completo...")
        return
    }
    const parte = nome.split(" ")
    let email = ""
    const tam = parte.length-1
    for(let i = 0; i < tam; i++){
        email += parte[i].charAt(0)
    }
    email += parte[tam]+"@empresa.com.br"
    resp.innerText = email.toLowerCase()
})