// Exercício 8: Cálculo de IMC

// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura).
// Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o usuário se encontra, de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal
// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3


let peso = parseFloat(prompt("informe o seu peso (kg): "))
let altura = parseFloat(prompt("informe o sua altura (metro): "))

let IMC = peso / (altura*altura)

console.log("Seu IMC é:" + IMC.toFixed(2))

if(IMC < 18.5) {
    console.log("Abaixo do peso")
} 

else if(IMC >= 18.5 && IMC <= 24.9) {
    console.log("Peso normal")
}

else if (IMC >= 25.0 && IMC <= 29.9) {
    console.log("Sobrepeso")
}

else if (IMC >= 30.0 && IMC <= 34.9) {
    console.log("Obesidade grau 1")
}

else if (IMC >= 35 && IMC <= 39.9) {
    console.log("Obesidade grau 2")
}

else  {
    console.log("Obesidade grau 3")
}










// let peso = parseFloat(prompt("qual o seu peso ?"))
// let alturaCM = (prompt("qual a sua altura (cm) ?"))

// let fracao = alturaCM * 0.01

// let IMC = peso / (fracao ** fracao)

// console.log(IMC)


// if (IMC > 40) {
//     console.log("obesidade grau 3")
// } else if (IMC >= 35 && IMC <= 39.9 ) {
//     console.log("obesidade grau 2")
// } else if (IMC >= 30 && IMC <=34.9 ) {
//     console.log("obesidade grau 1")
// } else if (IMC >= 25 && IMC <= 29.9) {
//     console.log("sobre peso")
// } else if (IMC >= 18.5 && IMC < 25 ) {
//     console.log("peso normal")
// }
//  else {
//     console.log("abaixo do peso")
// }