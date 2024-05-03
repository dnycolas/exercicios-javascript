// Exercício 4: Notas escolares

// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média 
// das notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO
// para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

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

let total = matematica + portugues + historia + ciencia

let media = console.log(total / 4)











