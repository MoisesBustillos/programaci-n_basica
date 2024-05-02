// Ejercicio 21
let sumaPares2 = 0, sumaImpares3 = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
        sumaPares2 += i;
    } else {
        sumaImpares3 += i;
    }
}
console.log(`Suma de números pares: ${sumaPares2}`);
console.log(`Suma de números impares: ${sumaImpares3}`);