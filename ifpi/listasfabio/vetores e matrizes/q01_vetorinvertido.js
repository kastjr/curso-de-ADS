

function main(){
    const tamanho = Number(input('QUANTOS ELEMENTOS RECEBERA O VETOR? '))

    const vetor_a = novo_vetor(tamanho)

    for (let i = 0; 1 < vetor_a.length; i++){
        vetor_a[i] = Number(input(`[${i+1}]º posição : `))
    }

    show_vetor(vetor_a)

    const vetor_b  = gerar_vetor_invertido(vetor_a)

    show_vetor(vetor_b)

}

function novo_vetor(tamanho){
    const vetor = new Array(tamanho)
    return vetor
}

main()