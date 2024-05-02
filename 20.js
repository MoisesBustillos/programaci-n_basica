// Ejercicio 20
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

rl.question('Introduce un número para calcular su factorial: ', (inputNumero) => {
  const numero = parseInt(inputNumero);
  console.log(`El factorial de ${numero} es ${factorial(numero)}.`);
  rl.close();
});
