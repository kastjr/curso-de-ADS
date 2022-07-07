function main(){
    const qtd_candidatos = Number(input('quantos candidatos:'))
    const vetor_candidatos = novo_vetor(qtd_candidatos)
    const votos = novo_vetor_votos(qtd_candidatos+3)
    mostrar_menu()
    let qtd_votos = 0

    while(opcao!=-1){
        qtd_votos++
        let opcao = Number(input('DIGA SEU VOTO:'))
        votos[opcao]++
    input('<enter> to continue...')
    opcao = mostra_menu()

    }
    console.clear()

    const porcentagem = 

    console.log('RESUMO')

}

function novo_vetor(tamanho){
    const vetor = new Array(tamanho)
    for(let i = 0; i < vetor.length ; i++){
        vetor[i] = input('qual o nome do candidato:')
    }
}

function novo_vetor_votos(tamanho){
    const vetor = new Array(tamanho)
    for(let i = 0; i < vetor.length ; i++){
        vetor[i] = 0 
    }
}

function mostrar_menu(vetor_candidatos){
    console.clear()
    let menu = '-----votacao------\n'
    menu += `0 - ${vetor_candidatos[0]} \n`
    menu += `1 - ${vetor_candidatos[1]} \n`
    menu += `2 - ${vetor_candidatos[2]} \n`
    menu += `3 - BRANCO \n`
    menu += `4 - NULO \n`
    menu += `5 - NAO OPINARAM \n`
    
    menu += '\n -1 - SAIR\n'

    console.log(menu)
    let  opcao = Number(input('>>> '))

    return opcao
}

main()
