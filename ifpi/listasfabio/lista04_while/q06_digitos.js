import {input , print} from '../../../io_utils.js'

function main(){
    const numero = input('digite um numero :')

    const digitos = numero.split('')
    
    const resposta = digitos.length

    print(`O numero ${numero} tem  ${resposta} digitos.`)
}

main()