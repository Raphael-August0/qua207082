function adicionar (valor){
    document.querySelector('#visor').value += valor
}

function limpar () {
    document.querySelector('#visor').value = ""
}

function apagar() {
    document.querySelector('#visor').value
    visor.value = visor.value.slice(0, -1) 
}

function calcular () {
    const visor =  document.querySelector("#visor")
    try {
        visor.value = eval(visor.value)

    } catch (error) {
        visor.value = "Erro"
    }
}

function porcentagem() {
    calcular()
    const visor = document.querySelector("#visor")
    visor.value = Number(visor.value)/100
}

const botoes = document.querySelectorAll("button")
for (const botao of botoes) {
    botao.addEventListener("click", () => {
        switch (botao.innerText) {
            case "C":
                limpar
                break;

            case "←":
                apagar
                break;   
        
            case "%":
                porcentagem
                break;

            case "=":
                calcular
                break;

            default:
                adicionar(botao.innerText)
                break;
        }
    })
}