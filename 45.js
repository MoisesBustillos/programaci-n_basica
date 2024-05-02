// Ejercicio 45
const fs = require('fs');
const readline = require('readline');

function consultarRegistroPorID(id) {
    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        const lineas = data.split('\n');

        let encontrado = false;
        lineas.forEach((linea) => {
            const campos = linea.split(',');
            const idRegistro = campos[0];

            if (idRegistro === id) {
                console.log(linea);
                encontrado = true;
            }
        });

        if (!encontrado) {
            console.log('Registro no encontrado.');
        }
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el ID a buscar: ', (id) => {
    consultarRegistroPorID(id);
    rl.close();
});
