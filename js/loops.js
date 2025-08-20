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

// forEach

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

//// forOf

let cidades = [
    {
        nome: "Sao Paulo",
        regiaoBrasil: "Sudeste"
    },
     {
        nome: "Rio de Janeiro",
        regiaoBrasil: "Sudeste"
    },
     {
        nome: "Rio Grande Do Sul",
        regiaoBrasil: "Sul"
    },
     {
        nome: "Mato Grosso",
        regiaoBrasil: "Centro Oeste"
    },
]


console.log("\nUtilizando For of")

for (const cidade of cidades) {
    console.log(cidade)
}

console.log("\nExemplo loop e objeto")

const pessoa = {
    nome: "Fulano da Silva",
    idade: 40,
    cidade: "São Paulo",
    estado: "SP"
}

for (const prop in pessoa) {
    console.log(pessoa[prop])
}

// 1. Faça um array chamado "clientes" contendo 3 objetos.
// Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Dio", "Ozzy" e "Ian").

const clientes = [
    {
        id: 1,
        nome: 'Dio'
    },
    {
        id: 2,
        nome: 'Ozzy'
    },
    {
        id: 3,
        nome: 'Ian'
    }
]


// 2. Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
 
// - Cliente: Dio, id: 1
// - Cliente: Ozzy, id: 2
// - Cliente: Ian, id: 3

console.log('\nExemplo no ForOf')
for (const iterador of clientes) {
    console.log("- Cliente: "+ iterador.nome +", id: "+ iterador.id)
}

console.log('\nExemplo no ForIn')
for (const iterador in clientes) {
    const cliente = clientes[iterador]

    console.log("- Cliente: "+ cliente.nome +", id: "+ cliente.id)
}

