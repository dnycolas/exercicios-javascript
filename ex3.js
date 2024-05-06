// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou ímpar.

// let num = parseInt(prompt("informe um numero inteiro: "))

// if(num%2 == 0){
//     console.log("O número informado é par")
// } else {
//     console.log("O número informado é par")
// }



let numero = parseInt(prompt("escolha um numero"))

let divisão = numero % 2

if (divisão > 0) {
    console.log("esse numero é impar")
}

else {
    console.log("numero é par")
}
