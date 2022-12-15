import {input , print} from './../io_utils.js'

function main(){
 const A = Number(input('valor A: '))
 const B = Number(input('valor B: '))

 let mmc = 1
    while(!(eh_mutiplo(mmc,A) && eh_mutiplo(mmc,B))){
        mmc++

    }

    print (`O mmc de A e B é ${mmc}`)
}

function eh_mutiplo(v1,v2){
    return v1 % v2 === 0

}

main()