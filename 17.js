// Ejercicio 17
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número: ', (input1) => {
  const inicio = parseInt(input1);
  rl.question('Introduce el segundo número mayor o igual que el primero: ', (input2) => {
    const fin = parseInt(input2);
    let suma = 0, cuenta = 0;

    for (let i = inicio; i <= fin; i++) {
      if (i % 2 === 0) {
        console.log(i);
        suma += i;
        cuenta++;
      }
    }
    console.log(`Hay ${cuenta} múltiplos de 2 y la suma es ${suma}.`);
    rl.close();
  });
});
