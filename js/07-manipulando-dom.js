'use strict'

/* Exemplo 01 */

// Procurando (querySelect) por um elemento chamado exemplo1

 const exemplo01 = document.querySelector("#exemplo1")
 const mensagem01 = document.getElementById("mensagem01")
 const pagina = document.querySelector("body")

 console.log(exemplo01)
 console.log(mensagem01)
 console.log(pagina)


 /*Para selecionar vários elementos, use querySelectorAll. O resultado é uma espécie de array de elementos (nodeList). */
 const paragrafos = document.querySelectorAll("p")
 console.log(paragrafos)