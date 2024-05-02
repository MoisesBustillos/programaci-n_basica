// Ejercicio 41
const fs = require('fs');
const readline = require('readline');

// Función para agregar un nuevo registro al archivo
function agregarRegistro(id, nombre, apellidos, direccion, estado) {
    const nuevoRegistro = `${id},${nombre},${apellidos},${direccion},${estado}\n`;
    fs.appendFileSync('DATOS.DAT', nuevoRegistro);
    console.log('Registro agregado con éxito.');
}

// Crear una interfaz de lectura de la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario por los datos del nuevo registro
rl.question('ID: ', (id) => {
    rl.question('Nombre: ', (nombre) => {
        rl.question('Apellidos: ', (apellidos) => {
            rl.question('Dirección: ', (direccion) => {
                rl.question('Estado: ', (estado) => {
                    agregarRegistro(id, nombre, apellidos, direccion, estado);
                    rl.close();
                });
            });
        });
    });
});
