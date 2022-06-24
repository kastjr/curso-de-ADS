import {input , print} from '../../../io_utils.js'

function main(){
    const h1 = Number(input('QUANTAS HORAS O PRIMEIRO PROFESSOR DEU AULA :'))
    const h2 = Number(input('QUANTAS HORAS O SEGUNDO PROFESSOR DEU AULA :'))
    const v1 = Number(input('QUANTO POR HORA O PRIMEIRO RECEBE?'))
    const v2 = Number(input('QUANTO POR HORA O SEGUNDO RECEBE?'))
    const media1 = h1*v1
    const media2 = h2*v2
    const maior = maiorsalario(media1,media2)
    print (`O maior salario é ${maior}`)
}

function maiorsalario(a,b){
    if (a>b){
        return ('do primeiro')
    } else if (a<b){
        return ('do segundo')
    } else if(a === b){
        return ('os salarios são iguais')
    }
}
main()
