// Ejercicio 31
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esPrimo(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

function tablaMultiplicar(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

rl.question('Introduce un número: ', (inputNumero) => {
  const num7 = parseInt(inputNumero);
  rl.question("Escribe 'primo' para verificar si es primo, 'factorial' para calcular su factorial, o 'tabla' para ver su tabla de multiplicar: ", (inputOpcion) => {
    const opcion = inputOpcion.toLowerCase();
    switch (opcion) {
      case "primo":
          console.log(`El número ${num7} ${esPrimo(num7) ? "es" : "no es"} primo.`);
          break;
      case "factorial":
          console.log(`El factorial de ${num7} es ${factorial(num7)}.`);
          break;
      case "tabla":
          tablaMultiplicar(num7);
          break;
      default:
          console.log("Opción no reconocida.");
          break;
    }
    rl.close();
  });
});
