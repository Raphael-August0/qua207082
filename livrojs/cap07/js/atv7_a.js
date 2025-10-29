const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const msg = frm.inMensagem.value
    let criptografia = ""
    for(let i = 1; i < msg.length; i = i+2){
        criptografia += msg.charAt(i)
    }
    for(let i = 0; i < msg.length; i = i+2){
        criptografia += msg.charAt(i)
    }
    resp.innerText = criptografia
})

frm.btDescriptografar.addEventListener("click",()=>{
    const criptografia = frm.inMensagem.value
    const msg = []
    let temp = criptografia.substr(0,criptografia.length/2)
    let aux = 1
    for(let i = 0; i < temp.length;i++){
        msg[aux] = temp.charAt(i)
        aux += 2
    }
    temp = criptografia.substr(criptografia.length/2)
    aux = 0
    for(let i = 0; i < temp.length;i++){
        msg[aux] = temp.charAt(i)
        aux += 2
    }
    resp.innerText = msg.join("")
})