'use strict'

/* Sobre Funções
Funções são blocos de código responsáveis por executar determinadas tarefas.
Para usar estes blocos/funções, é necessario "chamar/invocar" a função desejada através do seu nome.

Vantagens ao usar funcoes:
- Reutilização de código
- Organização de código-fonte, permitindo a separação de diferentes lógicas e responsabilidades
- Performance melhor
- Maior facilidade para manutenções 

No JavaScript existem várias maneiras de se criar uma função: função anõnima, função nomeada/declarada e arrow function. */


console.log("Exemplo 1")

const exemplo1 = function() {
    //corpo da função: ação que a função vai fazer
    console.log("Olá Função anônima!")
}

// chamando/invocando a função
exemplo1()

console.log("\nExemplo 2: Função Nomeada/Declarada")


function exemplo2() {
    console.log("Esta é uma função nomeada!")
}

exemplo2()

console.log("\nExemplo 3: Arrow Function (Função flecha/Seta)");

/*Sintaxe potencialmente mais simples para funções no JavaScript */
const exemplo3 = () => {}