const vendas = [
  { cliente: "Leticia", total: 500 },
  { cliente: "Gabriel", total: 100 },
  {cliente: "Leticia", total: 100 },
  {cliente: "Felipe", total: 200 },
  {cliente: "Gabriel", total: 50 },
];

const resultado = vendas.reduce(function(vendasAgrupadas, venda) {
  const cliente = venda.cliente;
  const total = venda.total;

 if (!vendasAgrupadas[cliente]) {
  vendasAgrupadas[cliente] = 0;
 }

 vendasAgrupadas[cliente] += total;

 return vendasAgrupadas;
},{});

console.log(resultado);