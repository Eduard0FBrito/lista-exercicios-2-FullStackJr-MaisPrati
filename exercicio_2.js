/*
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
*/

const prompt = require('prompt-sync')()

function gerarNumeroEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroAleatorio = gerarNumeroEntre(1,100)
let tentativas = 0
let acerto = 0

while (acerto == 0){
    const numero = parseInt(prompt("De seu palpite de 1 a 100: "))
    if (numero == numeroAleatorio){
        console.log("Acertou!")
        acerto = 1
        tentativas += 1
    } else if (numero > numeroAleatorio){
        console.log("Mais baixo")
        tentativas += 1
    } else if (numero < numeroAleatorio){
        console.log("Mais alto")
        tentativas += 1
    }
}

console.log(`Foram ${tentativas} tentativa(s)`)