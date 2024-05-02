// Ejercicio 14
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let contador = 0;

const getNumber = () => {
  if (contador < 5) {
    rl.question('Introduce un número: ', (input) => {
      numeros.push(parseInt(input));
      contador++;
      getNumber();  // Recursivamente pedir el siguiente número
    });
  } else {
    console.log(`El mayor número es ${Math.max(...numeros)}`);
    console.log(`El menor número es ${Math.min(...numeros)}`);
    rl.close();
  }
};

getNumber();
