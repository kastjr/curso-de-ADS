import {input , print} from '../../../io_utils.js'
function main(){
    const data1 = input('diga uma data em dd/mm/aaaa:')
    const [d1,m1,a1] = data1.split('/').map(Number)
    const data2 = input('diga uma data em dd/mm/aaaa:')
    const [d2,m2,a2] = data2.split('/').map(Number)
    const resultado = recente(d1,m1,a1,d2,m2,a2,data1,data2)
    print (`A data mais recente é`)
}

function recente(d1,m1,a1,d2,m2,a2,data1,data2){
    if(a1 < a2){
        return (`A data mais recente é`,data2)
    } else if(a1 > a2){
        return (`A data mais recente é`,data1)
    } else if ( a1 === a2){
        if (m1 < m2){
            return (`A data mais recente é`,data2)
        } else if ( m1 > m2){
            return (`A data mais recente é`,data1)
        } else if(m1 === m2){
            if(d1 < d2){
                return (`A data mais recente é`,data2)
            } else if (d1 > d2){
                return (`A data mais recente é`,data1)
            } else if (d1 === d2){
                return ('AS DATAS SAO IGUAIS')
            }
        }    
    }
}

main()