import {input , print} from '../../../io_utils.js'

function main(){
    //entrada
    const numeros = input('Diga três numeros :')
    const [n1,n2,n3] = numeros.split(' ').map(Number)
    //execution
    const ordem = cresce(n1,n2,n3)
    print(`Em ordem crescente temos : ${ordem}`)
}

function cresce(a,b,c){
    if (a < b && a < c && b < c){
        return (`${a},${b},${c}`)
    } else if (a < b && a > c){
        return (`${c},${a},${b}`)
    } else if (a > b && a > c && b > c){
        return (`${c},${b},${a}`)
    } else if (a < b && a < c && b > c){
        return (`${a},${c},${b}`)
    } else if (a < c && a > b){
        return (`${b},${a},${c}`)
    } else if (a > b && a > c && b < c){
        return (`${b},${c},${a}`)
    }
}

main()