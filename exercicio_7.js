/*
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.
*/

function produtosOrdenados(produtos) {
  const produtosCopia = [...produtos]

  produtosCopia.sort((a, b) => a.preco - b.preco)

  const nomesOrdenados = produtosCopia.map(produto => produto.nome)

  return nomesOrdenados
}

const produtos = [
  { nome: "Celular", preco: 1500 },
  { nome: "Notebook", preco: 3000 },
  { nome: "Fone de ouvido", preco: 200 },
  { nome: "Teclado", preco: 400 },
]

const nomesOrdenados = produtosOrdenados(produtos)
console.log(nomesOrdenados)