const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit",(e) => {
    e.preventDefault()
    const senha = frm.inSenha.value
    const erros = []
    if(senha.length < 8 || senha.length > 15){
        erros.push("Não possui entre 8 e 15 caracteres")
    }
    if(senha.match(/[0-9]/g) == null){
        erros.push("Não possui números (no mínimo 1)")
    }
    if(senha.match(/[a-z]/g) == null){
        erros.push("Não possui letras minúsculas (no mínimo 1)")
    }
    if(senha.match(/[A-Z]/g) == null || senha.match(/[A-Z]/g).length < 2){
        erros.push("Não possui letras maiúsculas (no mínimo 2)")
    }

    if(senha.match(/[\W|_]/g) == null){
        erros.push("Não possui símbolos (no mínimo 1)")
    }
    if(erros.length == 0){
        resp.innerText = "OK! Senha Válida"
    }else{
        resp.innerText = "Erro...\n"
        resp.innerText += `${erros.join("\n")}`
    }
    
})