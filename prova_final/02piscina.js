/* Uma piscina é algo muito legal de ter (um amigo que tem uma). Para evitar transbordar ao tomar banho na
piscina é bom deixar o nível da água com no máximo 85% da capacidade. Assim uma piscina que comporta 20 mil litros de
água é bom botar só 17mil litros. Considere uma piscina estilo quadrada. Para encher a piscina ele usará água paga (o
valor é cobrado por cada 1000 litros de água, em partes inteiras. Ou seja, se usar 1 litro já paga por 1000, ao usar 1002 já
paga 2 mil litros)
a. Calcule a capacidade máxima da piscina pedindo ao usuário as dimensões de largura, comprimento e
profundidade (em cm). 1 litro é igual a 1000 cm3

. Uma piscina por exemplo de capacidade → L=100cm x C=100cm

x P=100cm → 1000 litros, e deve ser cheia até 850 litros apenas.
b. Informe até quantos litros é recomendado encher a piscina.
c. Peça ao usuário para informar o valor a ser pago por cada 1000 litros na concessionária de água de sua cidade, e
informe quanto ele gastará para encher sua piscina;
d. Mensalmente é necessário repor 10% da água devido a banho e evaporação, informe ao usuário também o gasto
mensal para manter a piscina no nível ideal.*/

import {input} from '../io_utils.js'

function main(){
    const [largura, cumprimento, profundidade] = input('Digite as dimensões da piscina (em cm):').split(' ').map(Number)
    const preco_da_agua = Number(input('Quanto custa 1000 litros de água na sua cidade? (R$)'))
    const capacidade_total = (largura * cumprimento * profundidade)/1000
    const capacidade_recomendada = capacidade_total*0.85
    const valor_encher = custo(capacidade_recomendada,preco_da_agua)
    const valor_manutencao = reposicao(capacidade_recomendada,preco_da_agua)
    console.log(`Capacidade máxima: ${capacidade_total.toFixed(2)} litros.\nÉ recomendado encher até ${capacidade_recomendada.toFixed(2)} litros.`)
    console.log(`Você vai gastar R$${valor_encher} para encher e R$${valor_manutencao} para mantê-la no nível ideal.`)

}


function custo(capacidade_recomendada,preco_da_agua){
    const recomendado = capacidade_recomendada/1000
    let litros_excedentes = recomendado - Math.trunc(recomendado)
    let litros_a_pagar = Math.trunc(recomendado)
    if(litros_excedentes > 0){
        litros_a_pagar++
    }
    let valor = litros_a_pagar * preco_da_agua
    return (valor)
}


function reposicao(capacidade_recomendada,preco_da_agua){
    const evaporacao = capacidade_recomendada*0.1
    const valor = custo(evaporacao,preco_da_agua)
    return (valor)
}

main()