const promt = require('prompt-sync')()
console.log('Programa anos de copa do mundo. Digite 0 para sair')
console.log('--------------------------------------------------')
do{
    const ano = Number(promt('Ano: '))
    if (ano == 0){
        break
    }else if(ano == 1942|| ano == 1946){
        console.log(`Não houve Copa em ${ano}`)
    }else if(ano >= 1930 && ano % 4 == 2){
        console.log(`Sim! ${ano} é ano de copa do mundo`)
    } else{
        console.log(`Não...${ano} não é ano de copa do mundo`)
    }
} while (true);