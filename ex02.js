const readline = require(`readline-sync`)

const numberSecret = Math.floor(Math.random() * 100) + 1;
let tentativas = 0

console.log("Bem-vindos, ao jogo de adivinhação!");
console.log("Tente adivinhar um número entre 1 e 100");

while (true) {
  const palpite = Number(readline.question("Escreva seu palpite:"));
  tentativas++;

  if(palpite === numberSecret) {
    console.log(`Parabéns, você acertou em ${tentativas} tentativas`);
    break;
  
  } 
    console.log(palpite < numberSecret ? 'Dica: é MAIOR!' : 'Dica: é MENOR!');
  }

