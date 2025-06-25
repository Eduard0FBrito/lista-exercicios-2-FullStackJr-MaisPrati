/*
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.
*/

function memoize(fn) {
  const cache = {}

  return function(...args) {
    const key = JSON.stringify(args)

    if (cache[key]) {
      console.log(`Retornando do cache para ${args[0]}!`)
      return cache[key]
    }

    console.log(`Calculando fatorial de ${args[0]}...`)
    const result = fn.apply(this, args)
    cache[key] = result

    return result
  }
}

function fatorial(n) {
  if (n < 0) {
    throw new Error("Não é possível calcular o fatorial de um número negativo.")
  } else if (n === 0) {
    return 1
  } else {
    return n * fatorial(n - 1)
  }
}

const memoizedFatorial = memoize(fatorial)

console.log("Testando a função memoize com fatorial:")

console.log(`Fatorial de 5: ${memoizedFatorial(5)}`)
console.log(`Fatorial de 3: ${memoizedFatorial(3)}`)
console.log(`Fatorial de 5: ${memoizedFatorial(5)}`)
console.log(`Fatorial de 10: ${memoizedFatorial(10)}`)
console.log(`Fatorial de 3: ${memoizedFatorial(3)}`)
console.log(`Fatorial de 0: ${memoizedFatorial(0)}`)
console.log(`Fatorial de 1: ${memoizedFatorial(1)}`)
console.log(`Fatorial de 0: ${memoizedFatorial(0)}`)

console.log(`Fatorial de 7: ${memoizedFatorial(7)}`)
console.log(`Fatorial de 7: ${memoizedFatorial(7)}`)