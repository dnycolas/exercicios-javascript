// Exercício 5: Verificação de números em ordem crescente

// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente.
// Exibindo uma mensagem indicando se os números estão em ordem crescente ou não

console.log("Ordem crescente ou decrescente")

let num1 = parseFloat(prompt("escolha o primeiro numero"))

let num2 = parseFloat(prompt("escolha o segundo numero"))

let num3 = parseFloat(prompt("escolha o terceiro numero"))

if (num1 < num3) {
    console.log("ordem crescente")
} else if (num3 < num1) {
    console.log("ordem decrescente")
}

let ordem = console.log( "numero escolhidos: " + [num1,num2,num3] )