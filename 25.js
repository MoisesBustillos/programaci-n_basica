// Ejercicio 25
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número menor de 5000: ', (inputNumero) => {
  const num5 = parseInt(inputNumero);
  const roman = {
    M: 1000, CM: 900, D: 500, CD: 400,
    C: 100, XC: 90, L: 50, XL: 40,
    X: 10, IX: 9, V: 5, IV: 4, I: 1
  };
  let resultado = '';
  let numTemp = num5; // Clonamos el número para no alterar el original

  for (let i in roman) {
    while (numTemp >= roman[i]) {
      resultado += i;
      numTemp -= roman[i];
    }
  }
  console.log(resultado);
  rl.close();
});
