// Ejercicio 6
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número: ', (hasta) => {
    hasta = parseInt(hasta);
    for (let i = 1; i <= hasta; i++) {
        console.log(i);
    }
    rl.close();
});
