const eletronicos = [
  {nome: "notebook", preco: "1000" },
  {nome: "ventilador", preco: "80" },
  {nome: "celular", preco: "800"},
  {nome: "mouse", preco: "20"},

];

function nomesOrdenadosPorPreco(eletronicos) {
  return eletronicos
  .slice()
  .sort((a, b) => a.preco - b.preco)
  .map(item => item.nome);
}

const nomes = nomesOrdenadosPorPreco(eletronicos);
console.log(nomes);