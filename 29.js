// Ejercicio 29 
let cuenta4 = 0;
for (let i = 0; i < 100; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    if (dado1 + dado2 === 10) {
        cuenta4++;
    }
}
console.log(`La suma de 10 se obtuvo ${cuenta4} veces.`);
