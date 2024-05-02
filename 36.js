// Ejercicio 36

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const matriz = [];
  for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
      matriz[i][j] = generarNumeroAleatorio(1, 100);
    }
  }
  
  function obtenerMatrizTranspuesta(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    const transpuesta = [];
    for (let j = 0; j < columnas; j++) {
      transpuesta[j] = [];
      for (let i = 0; i < filas; i++) {
        transpuesta[j][i] = matriz[i][j];
      }
    }
    return transpuesta;
  }
  
  console.log("Matriz original:");
  console.log(matriz);
  
  const transpuesta = obtenerMatrizTranspuesta(matriz);
  console.log("Matriz transpuesta:");
  console.log(transpuesta);
  