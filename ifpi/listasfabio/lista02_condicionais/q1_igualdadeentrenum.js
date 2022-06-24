import {input , print} from '../../../io_utils.js'

function main () {
    //entrada 
    const numero = input('Digite 3 numeros :')
    const [n1, n2 , n3] = numero.split(' ').map(Number)
    //execução
    const num_iguais = comparacao(n1,n2,n3)
    print(`Existem  ${num_iguais} iguai(s)`)

}
function comparacao (n1,n2,n3){
    if (n1 === n2 && n1 === n3 && n2 === n3){
    return 3
} else if (n1 !== n2 && n1 !== n3 && n2!== n3){
    return 0
} else if ( n1 == n2 || n3 == n2 || n3 == n1){
    return 2
}

}
 
main()