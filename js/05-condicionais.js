'use strict'

let numero = 5

if (numero >= 10) 
    console.log("Condição Verdadeira")
else 
    console.log("Condição Falsa")


let resultado = (numero >= 10)? true : false


console.log(resultado)

let diaDaSemana = 6

switch (diaDaSemana) {
    case 1:
        console.log("segunda")
        break
    case 2:
        console.log("terca")
        break
    case 3:
        console.log("quarta")
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break
    case 7:
        console.log('domingo')
    default :
       console.log('Dia da semana não encontrado')
        
}

// Exercicio 

// 1. Crie duas variáveis conforme a seguir:
 
// - Nota 1 (contendo um valor de 0 a 10)
// - Nota 2 (contendo outro valor de 0 a 10)

let nota1 = 5
let nota2 = 8
 
// 2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
// DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.

let media = (nota1 + nota2) / 2

// 3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
// Caso contrário, mostre "reprovado".

if (media >= 7)
    console.log('Aprovado')
else 
    console.log('Reprovado')


