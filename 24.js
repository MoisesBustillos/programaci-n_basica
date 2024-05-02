// Ejercicio 24
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número mayor o igual que 1: ', (inputNumero) => {
  const numero4 = parseInt(inputNumero);
  let esPrimo = numero4 >= 2;
  for (let i = 2; i <= Math.sqrt(numero4); i++) {
    if (numero4 % i === 0) {
      esPrimo = false;
      break;
    }
  }
  console.log(esPrimo ? "El número es primo." : "El número no es primo.");
  rl.close();
});
