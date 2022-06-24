import {input , print} from '../../../io_utils.js'

function main(){
    //entrada 
    const numero = input('Digite um número de 10 até 99:')
    //execução
    const dezena = numero/10
    const unidade = numero%10
    const relacao = comparacao(dezena,unidade)
    //saida
    print(`A dezena é ${relacao} unidade.`)

}

function comparacao(n1,n2){
    if(n1 === n2){
        return ('igual a')
    } else if(n1 !== n2){
        return ('diferente da')
    }
}

main()