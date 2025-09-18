const frm= document.querySelector('form')
const resp = document.querySelector('pre')
const carros = []

carros.push({modelo:"Sandero 2014", preco: 32900})
carros.push({modelo:"Celta 2011", preco: 19500})
carros.push({modelo:"Palio 2012", preco: 26800})
carros.push({modelo:"Fusca 1994", preco: 12500})
carros.push({modelo:"Fiesta 2010", preco: 23000})
carros.push({modelo:"Gol 2009", preco: 24300})
carros.push({modelo:"Kwid 2018", preco: 35700})
carros.push({modelo:"Astra 2011", preco: 31500})

frm.btListar.addEventListener('click', ()=>{
    if(carros.length == 0){
        alert('Não há carros na lista')
        return
    }

    const lista = carros.reduce((acumulador, carro) =>
        acumulador + carro.modelo + ` - R$: ${carro.preco.toFixed(2)} \n`, "")
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
})

frm.btListar.dispatchEvent(new Event("click"))

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({modelo, preco})

    frm.inModelo.value = ""
    frm.inPreco.value = ""
    frm.inModelo.focus()

    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btFiltrar.addEventListener('click', ()=> {
    const maximo = Number(prompt('Qual o valor máximo que o cliente deseja pagar?'))
    if(maximo == 0 || isNaN (maximo)){
        return
    }


    const carrosFiltro = carros.filter(carro => carro.preco <= maximo)
    if(carrosFiltro.length == 0){
        alert ('Não há carros com preço inferior ou igual ao solicitado')
        return
    }

    let lista = ""
    for (const carro of carrosFiltro){
        lista += `${carro.modelo} - R$: ${carros.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros de até R$: ${maximo.toFixed(2)}\n`
    resp.innerText +="*".repeat(40)+"\n"
    resp.innerText += lista
})

frm.addEventListener("click", ()=> {
    if(desconto == 0 || isNaN(desconto)){
        return
    }
    const carrosDesc = carros.map(aux => ({
        modelo:aux.modelo,
        preco: aux.preco - (aux.preco * desconto/100)
    }))

    let lista = ""
    for(const carro of carrosDesc){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros de desconto R$: ${desconto}%\n`
    resp.innerText += "$".repeat(40)+"\n"
    resp.innerText += lista
        
})