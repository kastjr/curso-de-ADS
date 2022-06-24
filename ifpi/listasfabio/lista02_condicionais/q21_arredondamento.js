import {input , print} from '../../../io_utils.js'

function main () {
    //entrada 
    const numero = input('Digite um numero float  :')
    const [n1, n2] = numero.split('.').map(Number)
    //execution
    const resp = arredondamento(n1,n2)
    print(resp)
}

function arredondamento(a,b){
    if(b<5){
        return(a)
    }else{
        return (a+1)
    }
}

main()