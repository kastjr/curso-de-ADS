import {input , print} from '../../../io_utils.js'

function main(){
    const numero_1 = Number(input('Digite um número: '))
    const numero_2 = Number(input('Digite um número: '))
   
    let mdc = qual_eh_maior(numero_1,numero_2)
        while(!(eh_mutiplo(mdc,numero_1) && eh_mutiplo(mdc,numero_2))){
            mdc = mdc-1
        }

    print (`O mdc de ${numero_1} e ${numero_2} é ${mdc}`)

}

function eh_mutiplo(a,b){
    return a % b === 0
}

function qual_eh_maior(a,b){
    if(a > b){
        return b
    }else if(b > a){
        return a
    }
}

main()