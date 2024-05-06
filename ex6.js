// Exercício 6: Verificação de idade

// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos.
// Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let AnoNascimento = prompt("Ano do seu nascimento")


// let AnoAtual = new Date().getFullYear();
const Data = new Date ();
const AnoAtual =  Data.getFullYear();

let idade = (AnoAtual - AnoNascimento)

if ( idade >= 18 ) {
    console.log("você é maior de idade")
} else {
    console.log("você é menor de idade")
}