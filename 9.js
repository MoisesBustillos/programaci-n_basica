// Ejercicio 9
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número: ', (numero1) => {
    if (parseInt(numero1) >= 0) {
        console.log("El número es positivo.");
    } else {
        console.log("El número es negativo.");
    }
    rl.close();
});
