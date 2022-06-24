import {input , print} from '../../../io_utils.js'

function main(){
    //entrada 
    const numeros = input ('Digite tres numeros :')
    const [n1,n2,n3] = numeros.split(' ').map(Number)
    //execução
    const maior_num = maior(n1,n2,n3)
    print (`O maior numero é ${maior_num}`)
}

function maior(a,b,c){
    if (a > b && a > c){
        return a
    } else if(b > a && b > c){
        return b 
    } else if(c > a && c > b){
        return c
    } else if( a === b && b === c){
        return ('inexistente pois são iguais.')
    }
}
main()