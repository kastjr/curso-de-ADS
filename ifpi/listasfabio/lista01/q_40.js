import {input , print} from '../../../io_utils'

function main(){
    //entrada
    const anos_fumando = Number(input('Fuma a quantos anos?'))
    const cigarros_dia = Number(input('Quantos cigarros fuma por dia?'))
    const preco_carteira = Number(input('Qual valor da carteira?'))
    //execução
    const dias_fumando = anos_fumando*365
    const valor_cigarro = preco_carteira/20
    const gastos_dia = cigarros_dia*valor_cigarro
    const gasto_total = dias_fumando*gastos_dia
    //saída
    print(`o valosr gasto até hoje foi de R$ ${gasto_total}`)

}

main()