// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
// exemplo: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,.....

// objetivo: fazer que o ultimo numero some com o atual
let a = 0
let b = 1
let c = 1





for (let cont = 0; cont <= 9; cont++) {
    console.log(a)
    c = b + a
    a = b 
    b = c 
}
