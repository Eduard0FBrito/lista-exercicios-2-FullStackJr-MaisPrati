/*
Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.
*/

function debounce(fn, delay) {
  let timeoutId // Esta variável irá armazenar o ID do temporizador

  return function(...args) { // Retorna uma nova função
    const context = this // Mantém o contexto de 'this'

    clearTimeout(timeoutId) // Limpa qualquer temporizador anterior
    timeoutId = setTimeout(() => { // Inicia um novo temporizador
      const result = fn.apply(context, args) // Executa a função original e captura o resultado
      console.log(`Fatorial de ${args[0]} é: ${result}`) // Imprime o argumento e o resultado
    }, delay)
  }
}

// Função de teste: fatorial
function fatorial(n) {
  if (n < 0) {
    throw new Error("Não é possível calcular o fatorial de um número negativo.")
  } else if (n === 0) {
    return 1
  } else {
    return n * fatorial(n - 1)
  }
}

const debouncedFatorial = debounce(fatorial, 500)

console.log("Teste de debounce com fatorial:")

debouncedFatorial(5)
debouncedFatorial(6)
debouncedFatorial(7)
debouncedFatorial(4)

setTimeout(() => {
    console.log("\nSimulando eventos com atrasos:")
    debouncedFatorial(3)
}, 200)

setTimeout(() => {
    debouncedFatorial(8)
}, 400)

setTimeout(() => {
    debouncedFatorial(5)
}, 600)

setTimeout(() => {
    console.log("Esperando o debounce para 9...")
}, 1100)