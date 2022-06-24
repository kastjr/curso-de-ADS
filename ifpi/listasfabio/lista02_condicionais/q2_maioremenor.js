import {input , print} from '../../../io_utils.js'

function main(){
    //entrada 
    const numeros = input('Diga dois numeros :')
    const [n1,n2] = numeros.split(' ').map(Number)
    //execução
    const maior_menor = comparation(n1,n2)
    print(`O número ${n1} é ${maior_menor}  ${n2}`)

}

function comparation(a,b){
    if (a>b){
        return ('maior que')
} else if (a<b){
    return ('menor que')
} else if(a === b){
    return ('igual a')
}

}

main()