import {input , print} from '../../../io_utils.js'

function main(){
    //entrada 
    const nota1 = Number(input('diga a nota 1:'))
    const nota2 = Number(input('diga a nota 2:'))
    //execution 
    const media = (nota1+nota2)/2
    const aprovacao = resultado(media)
    print (aprovacao)
    
}

function resultado(media){
    if(media >= 7){
        return ('APROVADO!!')
    }else if (media < 7){
        return ('reprovado')
    }
}
main()