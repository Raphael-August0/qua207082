const frm= document.querySelector('form')
const resp = document.querySelector('pre')
const clubes = []

clubes.push({time: "São Paulo"})
clubes.push({time: "Botafogo"})
clubes.push({time: "Corinthians"})
clubes.push({time: "Flamengo"})
clubes.push({time: "Internacional"})
clubes.push({time: "Palmeiras"})
clubes.push({time: "Vasco"})
clubes.push({time: "Santos"})

frm.btListar.addEventListener('click', () =>{
    if(criancas.length == 0){
        alert('Não há times na lista')
        return
    }
    const l                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ista = clubes.reduce((acumulador,clubes)=>
    acumulador + crianca.nome + ` - ${crianca.idade} anos \n`, "")
resp.innerText = `Lista das criancas:\n${"-".repeat(40)}\n${lista}`
})


