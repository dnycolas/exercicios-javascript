// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

let idade = parseInt(prompt("Digite sua idade: "));

while (idade < 18) {
    idade = parseInt(prompt("idade invalida, por favor digite uma idade valida"))
}

console.log("bem vindo, você tem " + idade + " anos, certo?")





// let idade = parseInt(prompt("qual a sua idade ?"))


// while (idade < 18) {
//     let iddm = parseInt(prompt("idade invalida"))
//     idade = iddm
// }
// if (idade >= 18) {
//     console.log("bem vindo!")      
// }