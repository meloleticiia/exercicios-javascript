function paresParaObjeto(pares) {
  const objeto = {};

  for (let i = 0; i < pares.length; i++) {
    const chave = pares[i] [0];
    const valor = pares [i] [1];
    objeto[chave] = valor;
  }

  return objeto;
}

function objetoParaPares(obj) {
  const pares = [];

  for (let chave in obj) {
    pares.push([chave, obj[chave]]);
  }

  return pares;
}

const pares = [["nome", "Leticia"], ["idade", 26]];
const obj = paresParaObjeto(pares);
console.log(obj);

const novoArray = objetoParaPares(obj);
console.log(novoArray);
