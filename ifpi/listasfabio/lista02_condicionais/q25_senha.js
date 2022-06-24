import {input , print} from '../../../io_utils.js'

function main(){
    const senha = Number(input('digite a senha :'))
    if (senha === 1234){
        return ('SENHA CORRETA')
    }else {
        return ('SENHA INCORRETA')
    }

}

main()