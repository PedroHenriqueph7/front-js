'use strict'

//Loops


console.log("Exemplo While")

let i = 1

while (i <= 5) {
    console.log("Valor do contador: "+ i)
    i++;
}



console.log("Exemplo Do While")
let contador = 0

do {
    contador++

    console.log(contador)

} while (contador != 20)


console.log("Exemplo for")

let limite = 10

for (let i = 0; i < limite; i++) {
    console.log(i)
}