'use strict'

//Loops


console.log("\nExemplo While")

let i = 1

while (i <= 5) {
    console.log("Valor do contador: "+ i)
    i++;
}



console.log("\nExemplo Do While")
let contador = 0

do {
    contador++

    console.log(contador)

} while (contador != 20)


console.log("\nExemplo for")

let limite = 10

for (let i = 0; i < limite; i++) {
    console.log(i)
}

console.log("\nExemplo Loop e array")

const bandas = ["Slayer", "Metalica", "Iron Maiden", "Nightwish", "Judas Priest"]

for (let i = 0; i < bandas.length; i++) {
    console.log(bandas[i])
    
}

const pessoas = [
    {
        nome: "Pessoa1",
        idade: 23
    },
    {
        nome: "Pessoa2",
        idade: 21
    },
    {
        nome: "Pessoa3",
        idade: 28
    },
    {
        nome: "Pessoa4",
        idade: 29
    }
]
console.log("\nUtilizando o foreach e uma array de objetos")
pessoas.forEach(element => {
    console.log(element)
});


