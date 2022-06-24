import {input , print } from '../../../io_utils'

function main(){
    const tamanho = Number(input('Diga o tamanho do vetor : '))

    const vetor_a = new Array(tamanho)
    for(let index = 0; index < vetor_a.length; index++){
        vetor_a[index] =  Number(input('digite o valor : '))
    }

    const vetor_b = new Array(tamanho)
    for(let index = 0; index < vetor_b.length; index++){
        vetor_b[index] =  Number(input('digite o valor : '))
    }

    const vetor_c = new Array(2*tamanho)
    let i = 0
    for(let index = 0; index < vetor_c.length; index++){
        if(index < tamanho){
            vetor_c[index] = vetor_a[index]
        }else{
            vetor_c[index] = vetor_b[i]
            i++
        }
    }
    
    print(vetor_c)
}


main()