import {input , print} from '../../../io_utils.js'

function main(){
    //entrada
    const angulo = Number(input('Diga o numero do angulo : '))
    //execution
    const resp = posicao(angulo)
    //saida
    print(resp)
}

function posicao(a){
    if (a > 0 && a <= 90){
        return ('primeiro quadrante')
    }else if (a > 90 && a <= 180){
        return ('segundo quadrante')
    }else if (a > 180 && a <= 270){
        return ('terceiro quadrante')
    }else if (a > 270 && a <= 360){
        return ('quarto quadrante')
    }else {
        return ('valor invalido')
    }
}

main()