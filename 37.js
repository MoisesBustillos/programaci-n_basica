// Ejercicio 37
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Número de cursos: ", (inputCursos) => {
  const cursos = parseInt(inputCursos);
  rl.question("Número de alumnos por curso: ", (inputAlumnosPorCurso) => {
    const alumnosPorCurso = parseInt(inputAlumnosPorCurso);
    const notas = [];
    for (let i = 0; i < cursos; i++) {
      const cursoNotas = [];
      for (let j = 0; j < alumnosPorCurso; j++) {
        cursoNotas.push(parseFloat(prompt(`Introduce la nota del alumno ${j + 1} del curso ${i + 1}:`)));
      }
      notas.push(cursoNotas);
    }
    console.log(notas);
    rl.close();
  });
});
