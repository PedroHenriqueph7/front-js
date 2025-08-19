'use strict'

//Loops

let contador = 0


do {
    contador++

    console.log(contador)

} while (contador != 20)


// Enquanto o usuário não atender continue chamando

let statusLigação


do {

    let status = 'não atendido'
    let random = Math.random(1,10)
    
    if (random == 1) {
        status = 'atendido'
        console.log("atendido!")
    } else {
        console.log("Chamando...")
    }

} while (statusLigação != 'atendido')
