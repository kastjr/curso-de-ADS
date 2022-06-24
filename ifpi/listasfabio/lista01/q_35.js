import {input , print} from '../../../io_utils'

function main(){
    const n = Number(input('qual número?'))
    //execução
    const n1 = n/1000
    const n2 = (n%1000)/100
    const n3 = ((n%1000)%100)/10
    const n4 = ((n%1000)%100)%10
    const soma = n1+n2+n3+n4
    //saída
    print(soma)
}

main()