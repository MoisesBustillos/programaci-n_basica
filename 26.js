// Ejercicio 26
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una frase: ', (inputFrase) => {
  const frase3 = inputFrase;
  const terminalWidth = process.stdout.columns;
  const halfWidth = Math.floor(terminalWidth / 2);
  console.log(frase3.padStart(halfWidth + (frase3.length / 2), ' '));
  rl.close();
});
