/*
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.
*/

const prompt = require('prompt-sync')()

const frase = prompt("Digite uma frase: ")
let palavras = frase.split(' ')
let unicas = []

for (const palavra of palavras){
    if(!unicas.includes(palavra)){
        unicas.push(palavra)
    }
}

for (const palavra of unicas){
    console.log(palavra)
}