// Ejercicio 33
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calificaciones = [];

const obtenerCalificacion = (i) => {
  rl.question(`Introduce la calificación de la asignatura ${i + 1}: `, (inputCalificacion) => {
    const calificacion = parseFloat(inputCalificacion);
    calificaciones.push(calificacion);
    if (calificaciones.length < 10) {
      obtenerCalificacion(calificaciones.length);
    } else {
      rl.close();
      calcularMedia(calificaciones);
    }
  });
};

const calcularMedia = (calificaciones) => {
  const media = calificaciones.reduce((acc, val) => acc + val, 0) / calificaciones.length;
  console.log(`La media de las calificaciones es ${media.toFixed(2)}`);
};

obtenerCalificacion(0);
