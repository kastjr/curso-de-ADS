import {input , print} from '../../../io_utils.js'

function main () {
    //entrada 
    const numero = input('Digite 2 numeros :')
    const [n1, n2] = numero.split(' ').map(Number)
    print ('Diga a operacao que deseja com os dois numeros entre elas :')
    print ('1- ADIÇÃO')
    print ('2- SUBTRAÇÃO')
    print ('3- MULTIPLICAÇÃO')
    print ('4- DIVISÃO')
    const operacao = Number(input('Sua escolha => '))
    const resultado = calc(n1,n2,operacao)
    print(`${resultado}`)
}

function calc(a,b,o){
    if(o === 1){
        return(a+b)
    }else if(o === 2){
        return(a-b)
    }else if(o === 3){
        return(a*b)
    }else if (o === 4){
        return (a/b)
    }
}
main()