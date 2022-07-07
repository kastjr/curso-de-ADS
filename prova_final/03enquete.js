function main(){
    const qtd_candidatos = Number(input('quantos candidatos:'))
    const vetor_candidatos = novo_vetor(qtd_candidatos)
    const votos = novo_vetor_zerado(qtd_candidatos+3)
    mostrar_menu()
    let qtd_votos = 0

    while(opcao!=-1){
        qtd_votos++
        let opcao = Number(input('DIGA SEU VOTO:'))
        votos[opcao]++
    }

    const porcentagem = novo_vetor_zerado(qtd_candidatos+3)
    for (i = 0; i < porcentagem.length ; i++){
        porcentagem[i] = votos[i]*100/qtd_votos
    }
    
    const numero = maior_valor(votos)
    const segundo_turnoh = 
    console.log('\nRESUMO')
    console.log(`foram entrevistadas ${qtd_votos} pessoas.`)
    
    for (let i = 0 ; i < qtd_candidatos ; i++){
    console.log(`os votos no candidato ${vetor_candidatos[i]} foram ${votos[i]} que equivale a ${porcentagem[i]}% do total.`)
    }
    console.log(`os votos em branco foram ${votos[votos.length - 2]} que equivale a ${porcentagem[porcentagem.length - 2]}% do total.`)
    console.log(`os votos em nulo foram ${votos[votos.length - 1]} que equivale a ${porcentagem[porcentagem.length - 1]}% do total.`)
    console.log(`os votos em nao opinaram foram ${votos[votos.length]} que equivale a ${porcentagem[porcentagem.length]}% do total.`)
    console.log(`o lider da enquete foi ${vetor_candidatos[numero]}.`
    
}

function novo_vetor(tamanho){
    const vetor = new Array(tamanho)
    for(let i = 0; i < vetor.length ; i++){
        vetor[i] = input('qual o nome do candidato:')
    }
}

function novo_vetor_zerado(tamanho){
    const vetor = new Array(tamanho)
    for(let i = 0; i < vetor.length ; i++){
        vetor[i] = 0 
    }
}

function mostrar_menu(vetor_candidatos){
    console.clear()
    let menu = '-----votacao------\n'
    
    for ( i = 0 ; i < qtd_candidatos ; i++){
       menu += `i - ${vetor_candidatos[i]} \n`
    }
    menu += `${qtd_candidatos} - BRANCO \n`
    menu += `${qtd_candidatos + 1} - NULO \n`
    menu += `${qtd_candidatos + 2} - NAO OPINARAM \n`
    
    menu += '\n -1 - SAIR\n'

    console.log(menu)
    let  opcao = Number(input(' qual seu voto >>> '))

    return opcao
}
    
function maior_valor(votos){
    let maior = votos[0]
    let posicao_do_maior = [0]

    for(i = 0;i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
            posicao_do_maior = [i]
        }
    }

    return (posicao_do_maior)
}

main()
