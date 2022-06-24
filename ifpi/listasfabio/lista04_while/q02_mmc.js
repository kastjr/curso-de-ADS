import {input , print} from '../../../io_utils.js'

function main(){
    const numero_1 = Number(input('Digite um número: '))
    const numero_2 = Number(input('Digite um número: '))
    let mmc = 1
        while(!(eh_mutiplo(mmc,numero_1) && eh_mutiplo(mmc,numero_2))){
            mmc = mmc+1
        }

    print (`O mmc de ${numero_1} e ${numero_2} é ${mmc}`)

}

function eh_mutiplo(a,b){
    return a % b === 0
}

main()