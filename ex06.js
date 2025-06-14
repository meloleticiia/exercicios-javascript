function memoize(fn) {
  const cache = new Map();

  return function(...args){
    const key = args.join(",");

    if (cache.has(key)) {

      return cache.get(key);
    }

    const resultado = fn(...args);
    cache.set(key, resultado);
    return resultado;
  };
}

function subtrair(a, b) {
  console.log("Iniciando a subtração...");
  return a - b;
}

const subtrairMemoizada = memoize(subtrair);
console.log(subtrairMemoizada(8, 2));
console.log(subtrairMemoizada(8, 2));
console.log(subtrairMemoizada(10, 2));
console.log(subtrairMemoizada(10, 2));  