// Exercício 4: Notas escolares

// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média 
// das notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO
// para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

// alert("informe as notas de o a 10")
// let nota1 = parsefloat (prompt"DIgite a primeira nota: ")
// let nota2 = parsefloat (prompt"DIgite a segunda nota: ")
// let nota3 = parsefloat (prompt"DIgite a terceira nota: ")
// let nota4 = parsefloat (prompt"DIgite a quarta nota: ")

// let media = (nota1 + nota2 + nota3 +nota) / 4

// console.log(media)

// if (media >= 7) {
//     console.log("Aprovado")
// } else if (media < 7 && media >= 5) {
//     console.log("recuperação")
// } else {
//     console.log("reprovado")
// }




let nomeAluno = (prompt("Nome do aluno"))
console.log(nomeAluno)



let matematica = parseFloat(prompt("nota de matematica do aluno " + nomeAluno))
console.log("nota matematica: " + matematica)



let portugues = parseFloat(prompt("nota de português do aluno " + nomeAluno))
console.log("nota português: " + portugues)



let historia = parseFloat(prompt("nota de historia do aluno " + nomeAluno))
console.log("nota historia: " + historia)



let ciencia = parseFloat(prompt("nota de ciencia do aluno " + nomeAluno))
console.log("nota ciencias: " + ciencia)



let total = (matematica + portugues + historia + ciencia)
let media = (total / 4)



if (media >= 7) {
    console.log("aprovado");
} else if (media >= 5) {
    console.log("recuperação");
} else {
    console.log("reprovado")
}












