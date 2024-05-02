//Ejercicio 44
const fs = require('fs');
const readline = require('readline');

// Función para listar registros con un estado específico
function listarRegistrosPorEstado(estado) {
    // Leer el contenido del archivo
    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        // Dividir el contenido en líneas
        const lineas = data.split('\n');

        // Iterar sobre cada línea y extraer el estado
        lineas.forEach((linea) => {
            const campos = linea.split(',');
            const estadoRegistro = campos[4];

            // Comparar el estado con el estado proporcionado por el usuario
            if (estadoRegistro === estado) {
                console.log(linea);
            }
        });
    });
}

// Crear una interfaz de lectura de la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario por el estado a buscar
rl.question('Introduce el estado a buscar: ', (estado) => {
    listarRegistrosPorEstado(estado);
    rl.close();
});
