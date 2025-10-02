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