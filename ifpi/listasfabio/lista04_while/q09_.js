/*
passo 1 = criar uma função principal 
passo 2 = receber nela o numero da prova(forma de reconhecr a prova)
passo 3 = receber a quantidade de competidores daquela prova
passo 4 = perguntara a cada competidor o nome a classificação o tempo
e a equipe a qual defende 
passo 5 = de acordo com a posição e a equipe que ele defende os pontos
deverão ser distribuidos da seguinte maneira :
passo 5.2 = 1:9; 2:6; 3:4; 4:3
passo 6 = no fim para cada equipe de acordo com as clasificações
deverão ser somados os pontos
passo 7 = mostrar quem fez mais pontos 
*/




import {input , print } from '../../../io_utils.js'

function main(){
    let numero_da_prova = Number(input('qual numero da prova: '))

    let equipe_a = 0
    let equipe_b = 0 

    while(numero_da_prova!=0){
        
    let competidores = Number(input('Quantos competidores: '))
    while(competidores!=0){
         
        let nome = input('Qual nome : ')
        let posicao = Number(input('qual colocação: '))
        let tempo = Number(input('Qual foi o tempo: '))
        let equipe = Number(input('QUAL A EQUIPE DELE : A/1 OU B/2 : '))
        let pontos = pontosobtidos(posicao)
        if(equipe === 1){
            equipe_a = equipe_a+pontos
        }else{
            equipe_b = equipe_b+pontos
        }
        competidores--
    }
    numero_da_prova--
}
    
    const campeao = maior(equipe_a,equipe_b)

    print('-----------------------------------------------')
    print('             RESULTADO FINAL                   ')
    print('-----------------------------------------------')
    print(`|  EQUIPE   A       |        EQUIPE B          `)
    print(`|    ${equipe_a}    |         ${equipe_b}      `)
    print('-----------------------------------------------')
    print(`      A equipe vencedora é a equipe ${campeao} `)
    

}

function pontosobtidos(p){
     if (p === 1){
        return 9
     }else if(p === 2){
        return 6
     }else if(p === 3){
        return 4
     }else if(p === 4){
        return 3
     }else {
        return 0
     }
}

function maior(a,b){
    if(a > b){
        return ('A')
    }else if(b > a){
        return ("B")
    }
}

main()