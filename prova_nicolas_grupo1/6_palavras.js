import {input , print} from './../io_utils.js'


function main(){
    let frase
    do{
        frase = input("Informe sua frase: ")
    }while(frase.length < 80 && frase.length > 180)

    let tFrase = frase.split(" ")

 

    console.log(`A frase\n ${frase} \n contém ${tFrase.length} palavras`)
    


}
main()