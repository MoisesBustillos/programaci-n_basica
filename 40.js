// Ejercicio 40
// Definir las ventas realizadas por los representantes
const ventas = [
    { representante: "R1", mes: 1, producto: 1, cantidad: 100 },
    { representante: "R1", mes: 1, producto: 2, cantidad: 150 },
    { representante: "R1", mes: 1, producto: 3, cantidad: 200 },
    // Añadir más ventas aquí...
    { representante: "R3", mes: 12, producto: 4, cantidad: 300 }
];

// Inicializar la matriz para almacenar los totales de ventas por mes y producto
const totalVentas = Array.from({ length: 12 }, () => Array.from({ length: 4 }, () => 0));

// Calcular el total de ventas por mes y producto
ventas.forEach(venta => {
    const { mes, producto, cantidad } = venta;
    totalVentas[mes - 1][producto - 1] += cantidad;
});

// Imprimir los resultados
console.log("Total de ventas por mes y producto:");
console.log("Mes\tProducto\tTotal");
for (let mes = 0; mes < totalVentas.length; mes++) {
    for (let producto = 0; producto < totalVentas[mes].length; producto++) {
        console.log(`${mes + 1}\t${producto + 1}\t\t${totalVentas[mes][producto]}`);
    }
}
