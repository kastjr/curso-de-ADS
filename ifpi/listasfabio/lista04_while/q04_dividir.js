import {input , print} from '../../../io_utils.js'

function main(){
    const numero =  Number(input('Diga o numero: '))

    let cociente = numero/2
    while(cociente >= 1){
        cociente = cociente/2
    }

    print (cociente)
}

main()