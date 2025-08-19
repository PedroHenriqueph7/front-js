'use strict'

// Exemplo 1: objeto com dados de uma pessoa
console.log(`Exemplo 1:\n`)
const pessoa = {
  //propriedade: valor
    nome: "chaves",
    idade: 8,
    cidade: "São Paulo",
    estado: "SP"
}
console.log(pessoa)

//Acessamos as propriedades usando o nomeDoObjeto e  nomeDoPropriedade
console.log(`O ${pessoa.name} tem ${pessoa.idade}`)

// Exemplo 2: objeto com array
console.log(`\nExemplo2\n`)

//Object
const livro = {
    titulo: "O Senhor dos Aneis",
    autor: "J.R.R",
    volumes: ["A sociedade do Anel", "As duas Torres", "O retorno do Rei"]
}

console.log(livro)
console.log(livro.autor)
console.log(livro.volumes[1])

/*Para acessar algum dos volumes, primeiro passamos pela propriedade (volumes) usando "ponto" e, chegando nela, usamos os 'colchetes' com indices */

// array de objetos
const livros = [
    {
        titulo: "A Boa Sorte",
        autor: "Agatha Christie"
    },
    {
        titulo: "Crepusculo",
        autor: "stephanie Myers"
    },
    {
        titulo: "A Boa Sorte",
        autor: "Não Lembro"
    }
]

console.log(livros)


console.log(livros[2].titulo)


/* Exercícios
1. Crie um objeto chamado "aluno" contendo os seguintes dados:
- Nome Completo
- Data de Nascimento
- (Use ARRAY) Lista de telefones (fixo e celular)
- (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente):
  - rua
  - número
  - bairro
2. Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */
 

const aluno = {
    nomeCompleto: "Santos",
    dataNascimento: "20/04/1999",
    telefones: [ "119000000", "09999000", "119900000", "08001111"],
    endereco: {
        rua: "Rua XYZ",
        numero: "92",
        bairro: "São Sebastião"
    }
}

console.log(`Nome: ${aluno.nomeCompleto} \nTelefone: ${aluno.telefones[2]} \nBairro: ${aluno.endereco.bairro}`)