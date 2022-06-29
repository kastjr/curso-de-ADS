
//CRIAR UM VETOR VAZIO DO TAMANHO ESCOLHIDO
function novo_vetor(tamanho){
    const vetor = new Array(tamanho)
    return vetor
}

//MOSTRA O VETOR
function show_vetor(vetor){
    print (vetor)
}

function resetar_vetores(vetor){

}

//MOSTRA O NUMERO DE ELEMENTOS DO VETOR
function qtd_itens_no_vetor(vetor){
    let qtd = vertor.length
    return (qtd)
}

//RETORNA O MENOR VALOR DO VETOR E SUA POSIÇAÕ
function menor_valor(vetor){
    let menor = vetor[0]
    let posicao_do_menor = 0

    for(i = 0;i < vetor.length; i++){
        if(vetor[i] < menor){
            menor = vetor[i]
            posicao_do_menor = [i]+1
        }
    }

    return (`O menor valor do vetor é ${menor} na posição ${posicao_do_menor} .`)
}

//RETORNA O MAIOR VALOR E SUA POSIÇÃO
function maior_valor(vetor){
    let maior = vetor[0]
    let posicao_do_maior = 0

    for(i = 0;i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
            posicao_do_maior = [i]+1
        }
    }

    return (`O maior valor do vetor é ${maior} na posição ${posicao_do_maior} .`)
}

//RETORNA A MEDIA DOS VALORES DO VETOR
function media_valores_vetor(vetor){
    let media = soma_dos_valores/vetor.length
    let soma_dos_valores = 0
    for(i = 0; i < vetor.length ; i++){
        soma_dos_valores = vetor[i] + soma_dos_valores
    }

    return(media)
}

//RETORNA A SOMA DOS VALORES
function soma_dos_valores(vetor){
    let soma_dos_valores = 0
    for(i = 0; i < vetor.length ; i++){
        soma_dos_valores = vetor[i] + soma_dos_valores
    }

    return(soma_dos_valores)
}

//RETORNA APENAS OS VALORES NEGATIVOS E A QUANTIDADE DELES
function valores_negativos(vetor){
    let itens_negativos = []
    let qtd_itens_negativos = 0
    for(i = 0 ; i< vetor.length; i++){
        if(vetor[i] < 0){
            itens_negativos = add_item_no_vetor(itens_negativos,vetor[i])
            qtd_itens_negativos++
        } 
    }
    return(`Existem ${qtd_itens_negativos} itens negativos no vetor e são ${itens_negativos}`)
}

//RETORNA OS POSITIVOS E A QUANTIDADE 
function valores_positivos(vetor){
    let itens_positivos = []
    let qtd_itens_positivos = 0
    for(i = 0 ; i< vetor.length; i++){
        if(vetor[i] > 0){
            itens_positivos = add_item_no_vetor(itens_positivos,vetor[i])
            qtd_itens_positivos++
        } 
    }
    return(`Existem ${qtd_itens_positivos} itens positivos no vetor e são ${itens_positivos}`)
}


function add_item_no_vetor(vetor2,item){
    vetor2[vetor2.length] = item

    return (vetor2)
}
