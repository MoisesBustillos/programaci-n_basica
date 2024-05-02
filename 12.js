// Ejercicio 12
let sumaPares = 0, sumaImpares = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    } else {
        sumaImpares += i;
    }
}
console.log(`Suma de pares: ${sumaPares}`);
console.log(`Suma de impares: ${sumaImpares}`);
