import {input , print} from '../../../io_utils.js'

function main(){
    //entrada 
    const n1 = Number(input('Diga um numero :'))
    const n2 = Number(input('Diga outro numero :'))
    //execution 
    const divisao = n1%n2
    const resp = result(n1,n2,divisao)
    print(`${resp}`)
}

function result(a,b,divisao){
    if (divisao === 1){
        return (a+b+1)
    } else if (divisao === 2){
        if(a % 2 === 0 && b % 2 === 0){
            return ('ambos sao pares')
        } else if (a % 2 !== 0 && b % 2 !== 0) {
            return ('ambos sao impares')
        } else if (a % 2 !== 0 && b % 2 === 0){
            return (`${a} é impar e ${b} é par.`)
        } else if (a % 2 === 0 && b % 2 !== 0){
            return (`${b} é impar e ${a} é par.`)
        }
    } else if (divisao === 3){
        return ((a+b)*a)
    } else if (divisao === 4){
        return ((a+b)/b)
    } else if (divisao > 4){
        return ((a**2),(b**2))
    }
}

main()