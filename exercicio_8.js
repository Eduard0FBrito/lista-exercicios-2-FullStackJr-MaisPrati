/*
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.
*/

function somarVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, vendaAtual) => {
    const { cliente, total } = vendaAtual
    acumulador[cliente] = (acumulador[cliente] || 0) + total

    return acumulador;
  }, {})
}

const vendas = [
  { cliente: "Alice", total: 100 },
  { cliente: "Bob", total: 50 },
  { cliente: "Alice", total: 150 },
  { cliente: "Carlos", total: 200 },
  { cliente: "Bob", total: 75 },
]

const vendasPorCliente = somarVendasPorCliente(vendas)
console.log(vendasPorCliente)