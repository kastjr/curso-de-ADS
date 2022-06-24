import {input , print} from '../../../io_utils.js'

function main(){
//entrada 
const numeros = input ('Digite cinco numeros :')
const [n1,n2,n3,n4,n5] = numeros.split(' ').map(Number)
const media = (n1+n2+n3+n4+n5)/5
const resp = maior(n1,n2,n3,n4,n5,media)
print (`Os numeros maiores que a media sao ${resp}`)

}

function maior(a,m){
    if(a > m){
        
    }
}