import {input , print} from './../io_utils.js'

function main(){
    let contador_de_pares = 0
    let contador_de_impares = 0
    let contador_positivos = 0
    let contador_negativos = 0

    let anterior = Number(input('primeiro numero: '))
    let atual = Nmber(input('segundo numero: '))

    if (eh_par(anterior)){
        contador_de_pares++
    }else{
        contador_de_impares++
    }

    if (eh_par(atual)){
        contador_de_pares++
    }else{
        contador_de_impares++
    }

    if(eh_positivo(anterior)){
        contador_positivos++
    }else if(eh_negativo(anterior)){
        contador_negativos++
    }

    if(eh_positivo(atual)){
        contador_positivos++
    }else if(eh_negativo(atual)){
        contador_negativos++
    }

    while(!for_mutiplo(anterior,atual)){
        anterior = atual 
        atual = Number(input('Mais um numero: '))
        
        if (eh_par(atual)){
            contador_de_pares++
        }else{
            contador_de_impares++
        }

        if(eh_positivo(atual)){
            contador_positivos++
        }else if(eh_negativo(atual)){
            contador_negativos++
        }
    }

    print(`Qtd de pares ${contador_de_pares}`)
    print(`Qtd de impares ${contador_de_impares}`)
    print(`Qtd de positivos ${contador_positivos}`)
    print(`Qtd de negativos ${contador_negativos}`)

}

function eh_par(valor){
    return valor % 2 === 0
}

function eh_positivo(valor){
    return valor > 0 
}

function eh_negativo(valor){
    return valor < 0 
}

function for_mutiplo(n1,n2){
    if (n1 === 0 && n2 === 0){
        return true
    }

    if((n1 % n2 === 0) || (n2 % n2 === 0)){
        return true
    }else{
        return false
    }
}

main()