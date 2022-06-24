import {input , print} from '../../../io_utils.js'

function main(){
    //entrada
    const massa = Number(input('Diga sua massa: kg '))
    const altura = Number(input('Diga sua massa: m '))
    //execution
    const imc = massa/altura**2
    const resultado = faixa(imc)
    //saida
    print (resultado)
}

function faixa(a){
    if (a<25){
        return('PESO NORMAL')
    }else if (a >= 25 && a <= 30){
        return('OBESO')
    }else if(a>30){
        return('OBESIDADE MORBIDA ')
    }
}
main()