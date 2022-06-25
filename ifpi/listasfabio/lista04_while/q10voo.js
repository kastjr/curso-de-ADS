
import {input , print } from '../../../io_utils.js'

function main(){
    //carga
    let conteiners = Number(input('QUANTOS CONTEINERS SÃO? '))
    let peso_da_carga = peso_conteiners(conteiners)
    //passageiros
    let bilhete = Number(input('QUAL O NUMERO DE BILHETES? N '))
    let peso_pessoa = 0
    let peso_bagagem = 0
    let passageiros = 0
    while(bilhete!=0){
        peso_pessoa = peso_pessoa + Number(input('QUAL PESO DO PASSAGEIRO? '))
        peso_bagagem = peso_bagagem + Number(input('QUAL O PPESO DA BAGAGEM ? '))
        bilhete--
        passageiros++
    }

    let peso_passageiros = peso_pessoa + peso_bagagem

    let peso_decolagem = 15000 + peso_da_carga + peso_passageiros
    const peso_necessario = 500000

    print (`SAO ${passageiros} PASSAGEIROS`)
    print (`AS BAGAGENS SOMAM KG ${peso_bagagem}`)
    print (`O PESO TOTAL DOS PASSAGEIROS É DE KG ${peso_passageiros}`)
    const autorizacao = autoriza(peso_necessario,peso_decolagem)
    print(autorizacao)
    
}

function peso_conteiners(conteiners){
    let peso_conteiners = 0
    while(conteiners != 0 ){
        peso_conteiners = peso_conteiners + Number(input(`QUAL O PESO DO ${conteiners}º CONTEINER? KG `))
        conteiners--
    }
    return peso_conteiners
}

function autoriza(peso_necessario,peso_decolagem){
    const espaco_de_sobra = peso_necessario - peso_decolagem
    if(espaco_de_sobra === 0){
        return ('JA PODE VOAR!!! PESO = KG 500.000')
    }else if(espaco_de_sobra < 0){
        return ("NAO PODE VOAR!! PESO EXCEDE KG 500.000 ")
    }else if(espaco_de_sobra > 0 ){
        return (`PODE VOAR E AINDA PODERÁ AUMANTAR O VOLUME DE COMBUSTÍVEL EM ${espaco_de_sobra/1.5} LITROS`)
    }
}


main()