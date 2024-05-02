// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha.
// Verifique se o nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

// == -> verifica se um valor é igual à outro
// === -> verica se o valor e o tipo dos itens são iguais 

// console.log ( 1 === "1")




let username = prompt("Digite um nome de usuario: ")
let senha = prompt("Digite a senha: ")



if (username == "admin" && senha == "senha123") {
    console.log("Login bem sucedido" );




}    else {
        console.log ("Você não tem permissão para esta aqui")
    }



