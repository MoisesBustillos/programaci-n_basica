// Ejercicio 27
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número entre 0 y 10: ', (inputNumero) => {
  const num4 = parseInt(inputNumero);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num4} x ${i} = ${num4 * i}`);
  }
  rl.close();
});
