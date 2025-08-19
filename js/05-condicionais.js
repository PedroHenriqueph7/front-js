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

let nota1 = 9
let nota2 = 9
 
// 2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
// DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.

let media = (nota1 + nota2) / 2

// 3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
// Caso contrário, mostre "reprovado".

if (media >= 7)
    console.log('Aprovado')
else 
    console.log('Reprovado')





/*Conforme a média
- Media acima de 9 -> otimo
- Media acima de 7 -> bom
- Media acima de 5 -> ruim
- Media até 5 -> pessimo
*/


if (media > 9) {
    console.log('otimo')
} else if (media > 7) {
    console.log('bom')
} else if (media > 5) {
    console.log('ruim')
} else {
    console.log('pessimo')
}


/*Sobre o duplo e triplo sinal de igual
ao usar ==  comparação é composta é somente do valor,ou sej, não importa o tipo de dados(string, number, etc) */

/* Ao Usar === a comparação refere-se ao valor e o tipo de dados, importando tudo*/

let a = 10
let b = '10'

let comparacao = a == b //true
let comparacao1 = a === b // false

/*Operadores (e)&&, (ou)||, e !(não verdadeiro) */

//login com operador &&

let user = true
let password = true

if (user && password) {
    console.log('Login efetuado')
} else {
    console.log('Não foi possivel realizar o seu login')
}

// Aulas com operador ||

let feriado = true
let fimDeSemana = false

if (feriado || fimDeSemana) {
    console.log('Não tem Aula')
} else {
    console.log('Tem aula')
}

// Promoções backFriday com operador !

let blackFriday = true

if (!blackFriday) {
    console.log('Black friday não ativada')
} else {
    console.log('Black friday ativada')
}