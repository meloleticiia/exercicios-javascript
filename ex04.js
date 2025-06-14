function fatorial(n) {
  if (n < 0) {
    throw new Error("Não foi possível, valor inválido.");
  }

  if (n === 0) {
    return 1;
  }

  return n * fatorial(n - 1);

}

console.log(fatorial(-1));