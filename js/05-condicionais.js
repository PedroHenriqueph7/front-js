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