// Ejercicio 8
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getInput = () => {
    rl.question("Introduce 'S' o 'N': ", (entrada) => {
        if (entrada === 'S' || entrada === 'N') {
            console.log("Ingresaste: " + entrada);
            rl.close();
        } else {
            console.log("Entrada no válida, intenta de nuevo.");
            getInput(); 
        }
    });
};

getInput(); 