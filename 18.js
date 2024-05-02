// Ejercicio 18
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una frase: ', (inputFrase) => {
  const frase = inputFrase;
  rl.question('¿Qué letra quieres contar? ', (inputLetra) => {
    const letra = inputLetra;
    let cuentaLetra = 0;
    for (const char of frase) {
      if (char === letra) {
        cuentaLetra++;
      }
    }
    console.log(`La letra '${letra}' aparece ${cuentaLetra} veces en la frase.`);
    rl.close();
  });
});
