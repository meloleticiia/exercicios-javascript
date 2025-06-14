const frase = "olá olá mundo mundo";
const palavras = frase.split(" ");
const palavrasUnicas = [];

for (let i = 0; i < palavras.length; i++) {
  let palavraAtual = palavras [i];
  let jaExiste = false;

for (let j = 0; j < palavrasUnicas.length; j++) {
  if (palavrasUnicas[j] === palavraAtual) {
    jaExiste = true;
    break;
  }
}

if (!jaExiste) {
  palavrasUnicas.push(palavraAtual);
   }

}
console.log(palavrasUnicas);