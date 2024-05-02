// Ejercicio 42
const fs = require('fs');
const readline = require('readline');

// Función para eliminar un registro del archivo
function eliminarRegistro(id) {
    // Leer el contenido del archivo
    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        // Dividir el contenido en líneas
        const lineas = data.split('\n');

        // Buscar el registro a eliminar por el ID
        const indice = lineas.findIndex(linea => linea.startsWith(id + ','));

        if (indice === -1) {
            console.log('Registro no encontrado.');
            return;
        }

        // Eliminar el registro del contenido
        lineas.splice(indice, 1);

        // Escribir el contenido actualizado en el archivo
        const contenidoActualizado = lineas.join('\n');
        fs.writeFile('DATOS.DAT', contenidoActualizado, 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return;
            }
            console.log('Registro eliminado con éxito.');
        });
    });
}

// Crear una interfaz de lectura de la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario por el ID del registro a eliminar
rl.question('ID del registro a eliminar: ', (id) => {
    eliminarRegistro(id);
    rl.close();
});
