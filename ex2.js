// Exercício 2: Verificação de dia da semana

// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da semana e exibe o nome correspondente a esse dia.
// Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.

let dia = parseInt(prompt("escolha um dia da semana de 1 a 7"))

const dias = ['nenhuma','segunda','terça','quarta','quinta','sexta','sábado','domingo']


switch (dia) {
    case 1:
        console.log(dias[1])
        break;

        case 2:
            console.log(dias[2])
            break;

            case 3:
                console.log(dias[3])
                break;

                case 4:
                    console.log(dias[4])
                    break;

                    case 5:
                        console.log(dias[5])
                        break;

                        case 6:
                            console.log(dias[6])
                            break;

                            case 6:
                                console.log(dias[6])
                                break;

                                case 7: 
                                    console.log(dias[7])
                                    break;
    

    default:
        console.log ("tente um numero de 1 a 7")
        break;
}




