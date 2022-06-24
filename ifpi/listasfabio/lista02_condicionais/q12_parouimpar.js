import {input , print} from '../../../io_utils.js'

function main(){
    const num = Number(input('diga um numero'))
    const resposta = ip(num)
    print (resposta)
}
function ip(n){
    if(n % 2 === 0){
        return ('par')
    } else {
        return ('é impar')
    }
}

main()