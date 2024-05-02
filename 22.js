// Ejercicio 22
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una frase: ', (inputFrase) => {
  const frase2 = inputFrase;
  for (let i = 0; i < 5; i++) {
      console.log(' '.repeat(i * 4) + frase2);
  }
  rl.close();
});
