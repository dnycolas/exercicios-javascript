// 4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.

// pedir o número para o usuário
// multiplicar o numero do usuário

let num = parseFloat(prompt("escolha um numero de 1 à 10"))

for (let mult = num; mult <= 10; mult+=num) {
    console.log(mult);
}