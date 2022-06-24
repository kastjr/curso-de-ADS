import {input , print } from '../../../io_utils.js'

function main(){
    const numero_base = Number(input('digite um número base : '))

    let lista_de_numeros = Number(input('Diga o primeiro numero :'))
    while(lista_de_numeros != numero_base){
        lista_de_numeros = Number(input('diga outo numero até acharmos um igual ao numero base : '))
    }

    print(`o numero ${lista_de_numeros} é igual ao numero base.`)
}

main()