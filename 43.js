// Ejercio 43
const fs = require('fs');
const readline = require('readline');

// Función para realizar modificaciones en un registro del archivo
function modificarRegistro(id, nuevoNombre, nuevosApellidos, nuevaDireccion, nuevoEstado) {
    // Leer el contenido del archivo
    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        // Dividir el contenido en líneas
        const lineas = data.split('\n');

        // Buscar el registro a modificar por el ID
        const indice = lineas.findIndex(linea => linea.startsWith(id + ','));

        if (indice === -1) {
            console.log('Registro no encontrado.');
            return;
        }

        // Modificar los datos del registro
        const campos = lineas[indice].split(',');
        campos[1] = nuevoNombre;
        campos[2] = nuevosApellidos;
        campos[3] = nuevaDireccion;
        campos[4] = nuevoEstado;

        // Unir los campos modificados
        const registroModificado = campos.join(',');

        // Reemplazar el registro original con el registro modificado
        lineas[indice] = registroModificado;

        // Escribir el contenido actualizado en el archivo
        const contenidoActualizado = lineas.join('\n');
        fs.writeFile('DATOS.DAT', contenidoActualizado, 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return;
            }
            console.log('Registro modificado con éxito.');
        });
    });
}

// Crear una interfaz de lectura de la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario por los nuevos datos del registro a modificar
rl.question('ID del registro a modificar: ', (id) => {
    rl.question('Nuevo nombre: ', (nuevoNombre) => {
        rl.question('Nuevos apellidos: ', (nuevosApellidos) => {
            rl.question('Nueva dirección: ', (nuevaDireccion) => {
                rl.question('Nuevo estado: ', (nuevoEstado) => {
                    modificarRegistro(id, nuevoNombre, nuevosApellidos, nuevaDireccion, nuevoEstado);
                    rl.close();
                });
            });
        });
    });
});
