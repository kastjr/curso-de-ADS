import {input , print} from '../../../io_utils.js'

function main(){
    //entrada 
    const numeros = input ('Digite cinco numeros :')
    const [n1,n2,n3,n4,n5] = numeros.split(' ').map(Number)
    //execução
    const maior_num = maior(n1,n2,n3,n4,n5)
    const menor_num = menor(n1,n2,n3,n4,n5)
    print (`O maior numero é ${maior_num} e o menor é ${menor_num}`)
}

function maior(a,b,c,d,e){
    if (a > b && a > c && a > d && a > e){
        return (a)
    }else if (b > a && b > c && b > d && b > e){
        return (b)
    }else if (c > b && c > a && c > d && c > e){
        return (c)
    }else if (d > b && d > c && d > a && d > e){
        return (d)
    }else if (e > b && e > c && e > d && e > a){
        return (e)
    }
}

function menor(a,b,c,d,e){
    if (a < b && a < c && a < d && a < e){
        return (a)
    }else if (b < a && b < c && b < d && b < e){
        return (b)
    }else if (c < b && c < a && c < d && c < e){
        return (c)
    }else if (d < b && d < c && d < a && d < e){
        return (d)
    }else if (e < b && e < c && e < d && e < a){
        return (e)
    }
}
main()