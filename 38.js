// Ejercicio 38
function shellSort(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Convertir la primera columna en un array separado para ordenar
    const firstColumn = [];
    for (let i = 0; i < rows; i++) {
        firstColumn.push(matrix[i][0]);
    }

    // Aplicar Shell Sort a la primera columna
    for (let gap = Math.floor(firstColumn.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < firstColumn.length; i++) {
            const temp = firstColumn[i];
            let j;
            for (j = i; j >= gap && firstColumn[j - gap] > temp; j -= gap) {
                firstColumn[j] = firstColumn[j - gap];
            }
            firstColumn[j] = temp;
        }
    }

    // Reordenar la matriz original según la primera columna ordenada
    const sortedMatrix = [];
    for (let i = 0; i < firstColumn.length; i++) {
        const index = firstColumn.indexOf(matrix[i][0]);
        sortedMatrix.push(matrix[index]);
        firstColumn[index] = undefined; // Marcar el elemento como ordenado
    }

    return sortedMatrix;
}

// Ejemplo de uso
const matrixToSort = [
    [3, 8, 1],
    [1, 4, 6],
    [2, 7, 3]
];

const sortedMatrix = shellSort(matrixToSort);
console.log(sortedMatrix);
