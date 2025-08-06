'use strict'

// Declarando um arrayn(vetor)

let vocalistas = ["Ozzy", "Dio", "Lemmy", "David Gilmour"]

// Busca de um elemento no vetor por meio de indice
//console.log(vocalistas[0])

// Retorna todos os elementos do vetor, mas retorna apenas no console/ apenas um quebragalho
//console.log(vocalistas)

// o David Gilmour está em turnê tocando Pink Flouyd
console.log(`O ${vocalistas[3]} está em turnê tocando Pik Floyd`)


// Constantes também podem se tornar arreys
const coisas = [10, "Senac", 23.4]

/* Exercícios (FAÇA AQUI MESMO!) */

// 1) Crie um array contendo o nome de 7 coisas que vc gosta (exemplos: artistas, músicas, livros, comida... sei lá, inventa!)

let hobbies = ["Futebol", "Formula1", "Academia", "Leitura", "Animes", "Cinema", "Parque"]
// 2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo elemento do array. Use concatenação e/ou template string.

console.log("Hoje treinarei na "+ hobbies[1] +" a noite e logo após irei assistir "+ hobbies[4] +" e marcarei essa semana uma caminhada ao "+ hobbies[6] +".")

console.log(`Hoje iniciarei um treino na nova ${hobbies[1]} do bairro e assistirei ${hobbies[4]} e irei ao ${hobbies[6]} esta semana`)


// Matrizes
const tecnologias = [ ["HTML", "CSS", "JAVASCRIPT"], ["Figma", "Photoshop"], ["PHP", "Node.js", "SQL", "Express"]]

// console.log(tecnologias)

console.log(tecnologias[0][2]) // JavaScript

console.log(tecnologias[2][3]) // Express

