const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const palavra = frm.inFruta.value.toUpperCase()
    resp.innerText = ""
    for (const letra of palavra) {
        if(letra == palavra.charAt(0)){
            resp.innerText += letra
        }else{
            resp.innerText += "_"
        }   
        
    }
    frm.inFruta.value = "*".repeat(palavra.length)
})