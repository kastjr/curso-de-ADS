import {input , print} from '../../../io_utils.js'

function main() {
    const num = input('diga tres numeros : ')
    const [n1,n2,n3] = num.split(' ').map(Number)
    const opcao = Number(input('Escolha uma opcao 1,2 ou 3:'))
    const resposta = escolha(n1,n2,n3,opcao)
    print (`voce escolheu ${resposta}`)
}

function escolha(a,b,c,x){
    if ( x === 1){
        return a
    }else if(x === 2){
        return b
    }else if(x === 3){
        return c
    }
}

main()