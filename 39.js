// Ejercicio 39
const paginas = Array.from({ length: 3 }, (_, pageIndex) => Array.from({ length: 4 }, (_, rowIndex) => Array.from({ length: 5 }, (_, colIndex) => pageIndex * 20 + rowIndex * 5 + colIndex + 1)));
paginas.forEach((pagina, index) => {
    console.log(`Página ${index + 1}:`);
    pagina.forEach(fila => console.log(fila.join(' ')));
});
