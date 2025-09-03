'use strict'

const campoBusca = document.querySelector("#busca");
const clientes = document.querySelectorAll("#produtos li")

campoBusca.addEventListener("input", function(){
    const termoDigitado = campoBusca.value.toLowerCase();
    
    for(const cliente of clientes){

        //Se o nome do cliente incluir algum caractere digitado
        if(cliente.textContent.toLowerCase().includes(termoDigitado)) {
            cliente.style.display = "list-item";
        } else {
            cliente.style.display = "none";
        }

    }
})