import {input , print} from '../../../io_utils.js'

function main(){
    //entrada
    const custo_fab = Number(input('Qual o custo da fábrica?'))
    //execuçao
    const distribuidor = custo_fab*28/100
    const imposto = custo_fab*45/100
    const custo_cliente = custo_fab+distribuidor+imposto
    //saída
    print(`O valor será de ${custo_cliente}`)

}

main()