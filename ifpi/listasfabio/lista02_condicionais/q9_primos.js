import {input , print} from '../../../io_utils.js'

function main(){
    const numero = input('DIGA UM NUMERO ENTRE 0 E 100:')
    //execution
    const reposta = eh_primo(numero)
    print(`O numero ${reposta}`)
}

function divisao(n){

    for (let i=2; i <= n; i++){
        return i 
    }
    if (n % i === 0){
        return 0 
    } else{
        return 1
    }
}

function eh_primo(n){
    if(divisao === 1){
        return ('é primo')
    } else{
        return ('não é primo')
    }
}


main()


