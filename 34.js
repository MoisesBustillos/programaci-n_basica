// Ejercicio 34
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calificaciones2 = [5.5, 8.0, 9.0, 6.5, 7.5, 8.5, 9.5, 10, 6.0, 8.0];

rl.question("Introduce la nota que deseas buscar: ", (inputNota) => {
  const notaBuscada = parseFloat(inputNota);
  const encontrada = calificaciones2.includes(notaBuscada);
  console.log(`La nota ${notaBuscada} fue ${encontrada ? "encontrada" : "no encontrada"} en la lista.`);
  rl.close();
});
