// Ejercicio 30 
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número: ', (inputNum1) => {
  const num5 = parseInt(inputNum1);
  rl.question('Introduce el segundo número: ', (inputNum2) => {
    const num6 = parseInt(inputNum2);
    rl.question('Elige una operación (suma, resta, multiplicación, división): ', (inputOperacion) => {
      const operacion = inputOperacion.toLowerCase();
      switch (operacion) {
        case "suma":
          console.log(`Resultado: ${num5 + num6}`);
          break;
        case "resta":
          console.log(`Resultado: ${num5 - num6}`);
          break;
        case "multiplicación":
          console.log(`Resultado: ${num5 * num6}`);
          break;
        case "división":
          if (num6 !== 0) {
              console.log(`Resultado: ${num5 / num6}`);
          } else {
              console.log("No se puede dividir por cero.");
          }
          break;
        default:
          console.log("Operación no reconocida.");
          break;
      }
      rl.close();
    });
  });
});
