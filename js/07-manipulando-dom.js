'use strict'

/* Exemplo 01 */

// Procurando (querySelect) por um elemento chamado exemplo1

 const exemplo01 = document.querySelector("#exemplo1")
 const mensagem01 = document.getElementById("mensagem01")
 const pagina = document.querySelector("body")


 /*Para selecionar vários elementos, use querySelectorAll. O resultado é uma espécie de array de elementos (nodeList). */
 const paragrafos = document.querySelectorAll("p")
 console.log(paragrafos)


 /* Um evento é um acontecimento ou fenômeno que, quando acontece, dispara ações em nosso programa/site/aplicação.
 
 O JavaScript suporta centenas de tipos de evento. Exemplos: clique do mouse, pressionar teclas, tocar na tela, rolagem da página, carregamento da página e etc. */
 // Exemplo Detectando eventos 

 exemplo01.addEventListener("click", function(){
    mensagem01.textContent = "Opa, evento funcionou!"
    // Adiciona a classe destaque
    mensagem01.classList.add("destaque")
 });


 mensagem01.addEventListener("dblclick", function(){
    mensagem01.textContent = "";
    // Remove a classe destaque
    mensagem01.classList.remove("destaque")
 })

//  Geral
//  Exercícios
 
// 1) Crie uma constante nova e selecione o h1 da sua página

const tituloH1 = document.getElementById("titulo")

// 2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralizado.

tituloH1.addEventListener("mouseover", function(){
    tituloH1.textContent = "Praticando Eventos!"
    tituloH1.style.textAlign = "center"

})

// 3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar à esquerda (padrão). 

const referencias = document.getElementById("referencias")
referencias.addEventListener("click", function(){
    tituloH1.textContent = "Eventos"
    tituloH1.style.textAlign = "start"
})

const botaoNoturno = document.querySelector("#noturno")

botaoNoturno.addEventListener("click", function(){
    /*Usamos o toggle para alternar entre adicionar a classe , de acordo com cada clique no botão*/
    pagina.classList.toggle("modo_noturno")

   

})


/**DESAFIOS!
 * 1) Faça a mudança de cores acontecer gradualmente (use o transition!)
   2) Se o modo noturno estiver ativado, ou seja, se a classe modo-noturno
    estiver aplicada à página, faça o texto do botão mudar para "Desativar".
    Caso contrário, faça o texto do botão exibir "Ativar". */


