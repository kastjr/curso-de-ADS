/*Leia de um arquivo dados de N alunos no padrão de linha: “ROGERIO SILVA;5.5;8.0;10.0;22/90” que significa
nome: ROGÉRIO SILVA, nota 1: 5.5, nota2: 8.0 e nota3: 10.0 - e de um Total de 90 aulas teve 22 faltas.
Calcular a média ponderada das notas de cada aluno, as notas têm pesos 1, 2 e 3 respectivamente.
● Aprovado média maior ou igual a 7;
● Em Prova Final se inferior a 7 e maior ou igual a 4; e,
● Reprovado caso não alcance média 4; e
● Reprovado por Falta se independente da média, ter percentual de falta superior a 25%.
Calcule e imprima:
a. A média de cada aluno;
b. A média da classe;
c. O número de aprovados;
d. O número reprovados;
e. O número de prova final.
f. Reprovados por falta.*/
import fs from 'fs'

function main(){
    const dados_de_alunos = fs.readFileSync('./alunos.txt','utf-8').split('\n')

    let media_do_aluno = 0
    let soma_das_medias = 0
    let contador_aprovados = 0
    let contador_reprovados = 0
    let contador_prova_final = 0
    let contador_reprovados_por_falta = 0 

    for (let dado of dados_de_alunos){
        let dados_divididos = dado.split(';')
        let nome = dados_divididos[0]
        let nota_1 = Number(dados_divididos[1])
        let nota_2 = Number(dados_divididos[2])
        let nota_3 = Number(dados_divididos[3])
        let faltas = dados_divididos[4]

        faltas = faltas.split('/').map(Number)
        let ausencias = faltas[0]
        let aulas_totais = faltas[1]

        media_do_aluno = (nota_1 + (nota_2 * 2) + (nota_3 * 3)) / 6
        soma_das_medias = soma_das_medias + media_do_aluno
        console.log(`A média do(a) ${nome} é ${media_do_aluno.toFixed(2)}`)
    
        if((ausencias/aulas_totais) > 25){
            contador_reprovados_por_falta = contador_reprovados_por_falta + 1
        } else {
            if(media_do_aluno > 7){
                contador_aprovados = contador_aprovados + 1
            } else if (media_do_aluno < 4){
                contador_reprovados++
            } else {
                contador_prova_final++
            }
        }
    }
            const media_da_turma = soma_das_medias/dados_de_alunos.length
            console.log('\nRESUMO DAS NOTAS')
            console.log(`A média da turma foi ${media_da_turma.toFixed(2)}`)
            console.log(`A turma teve ${contador_aprovados} alunos aprovados.`)
            console.log(`A turma teve ${contador_reprovados} alunos reprovados.`)
            console.log(`A turma teve ${contador_prova_final} alunos de prova final.`)
            console.log(`A turma teve ${contador_reprovados_por_falta} alunos reprovados por falta.`)
        
}



main()
