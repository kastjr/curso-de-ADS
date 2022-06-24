import {input , print} from '../../../io_utils.js'

function main () {
    //entrada 
    const inicio = input('Digite a hora do inicio do jogo ex(hh:mm) :')
    const [hi, mi] = inicio.split(':').map(Number)
    const fim = input('Digite a hora do fim do jogo ex(hh:mm) :')
    let [hf, mf] = fim.split(':').map(Number)
    //execution
    if(hf<hi){
        return(hf = hf+24)
    }else{
        return (hf = hf)
    }
    const tempo = (hf*60+mf)-(hi*60+mi)
    const hd = tempo/60
    const md = tempo%60
    print(`O jogo durou ${hd} horas e ${md} minutos`)
}

/*function duration(hi, mi, hf, mf){
    if 
}*/
main()
