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

console.log("\nExemplo 4: função com parâmetro")
function saudacao(nome = "Visitante"){
    console.log("Olá, "+nome)
}

let nome = "Pedro"
saudacao(nome)

console.log("\nExemplo 5: função com parâmetros e retorno")


/*Sempre que tivermos a necessidade de trabalhar com o resultado do processamento de uma função, então essa função deve ter o return */
function multiplicar(valor1, valor2) {
    return valor1 * valor2
}

let resultado1 = multiplicar (10, 5)
let resultado2 = multiplicar(200, 10)

console.log("Resultado 1: "+ resultado1)
console.log("Resultado 2: "+ resultado2)

console.log("\nExemplo 6: Simplificando com Arrow Function")

//Sintaxe declarada/nomeada
// function somar(valor1, valor2) {
//     return valor1 + valor2
// }

// Versão 2: Sintaxe Arrow Function
const somar = (valor1, valor2) => valor1 + valor2

console.log( somar(150, 500))

console.log("\nExemplo 7: formatando valor monetário")

function formatarMoeda(valor){
   return new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL"}).format(valor)
}

let preco = 500;
let desconto = preco * 0.10
let precoFinal = preco - desconto

console.log("Preço original = "+formatarMoeda(precoFinal))
console.log("Desconto = "+formatarMoeda(desconto))
console.log("Preço final = "+formatarMoeda(precoFinal))

// Exemplo: usando recursos da classe Intl (Internacionalização)
 