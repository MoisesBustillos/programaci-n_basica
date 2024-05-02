// Ejercicio 11
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (input) => {
  const hasta2 = parseInt(input);
  let cuentaMultiplos3 = 0;
  for (let i = 1; i <= hasta2; i++) {
    if (i % 3 === 0) {
      console.log(i);
      cuentaMultiplos3++;
    }
  }
  console.log(`Hay ${cuentaMultiplos3} múltiplos de 3 hasta el número ${hasta2}.`);
  rl.close();
});
