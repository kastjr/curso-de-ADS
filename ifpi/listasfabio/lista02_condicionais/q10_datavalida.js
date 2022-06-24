import {input , print} from '../../../io_utils.js'

function main(){
    const data = input('diga uma data em dd/mm/aaaa:')
    const [d,m,a] = data.split('/').map(Number)
    //execution
    const resp = validade(d,m,a)
    print (resp)

}

function validade(d,m,a){
    if(d < 31 && d > 0 && m > 0 && m < 13 && a > 0){
        return ('data valida.')
    } else{
        return ('data invalida.')
    }
}

main()