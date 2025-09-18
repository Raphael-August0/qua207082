const frm= document.querySelector('form')
const resp = document.querySelector('pre')
const criancas = []

criancas.push({nome: "Lucas", idade: 4})
criancas.push({nome: "Ana", idade: 3})
criancas.push({nome: "Bianca", idade:6})
criancas.push({nome: "Pedro", idade: 6})
criancas.push({nome: "João", idade: 4})
criancas.push({nome: "Maria", idade: 4})
criancas.push({nome: "Juliana", idade: 3})
criancas.push({nome: "Cátia", idade: 6})

frm.btListar.addEventListener('click', () =>{
    if(criancas.length == 0){
        alert('Não há crianças na lista')
        return
    }

const lista = criancas.reduce((acumulador,crianca)=>
    acumulador + crianca.nome + ` - ${crianca.idade} anos \n`, "")
resp.innerText = `Lista das criancas:\n${"-".repeat(40)}\n${lista}`
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