/*
Escreva duas funções:
○ paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], ... ] e retorna o objeto equivalente.

○ objetoParaPares(obj) faz o inverso, retornando um array de
pares.
*/

function paresParaObjeto(pares) {
  return pares.reduce((objetoAcumulado, parAtual) => {
    const [chave, valor] = parAtual
    objetoAcumulado[chave] = valor
    return objetoAcumulado
  }, {})
}

function objetoParaPares(obj) {
  return Object.entries(obj)
}

const meuArrayDePares = [
  ["nome", "João"],
  ["idade", 30],
  ["cidade", "São Paulo"]
]

const meuOutroObjeto = {
  produto: "Celular",
  preco: 1200,
  estoque: 50
}

const meuOutroArrayDePares = objetoParaPares(meuOutroObjeto)
console.log(meuOutroArrayDePares)

const meuObjeto = paresParaObjeto(meuArrayDePares)
console.log(meuObjeto)