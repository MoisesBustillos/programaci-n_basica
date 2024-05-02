// Ejercicio 13
let cuentaMultiplos2y3 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        console.log(i);
        cuentaMultiplos2y3++;
    }
}
console.log(`Hay ${cuentaMultiplos2y3} números que son múltiplos de 2 o de 3 entre 1 y 100.`);
