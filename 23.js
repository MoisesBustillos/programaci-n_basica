// Ejercicio 23
for (let i = 0; i <= 100; i++) {
    process.stdout.write(`${i.toString().padEnd(3, ' ')} `);
    if (i % 10 === 9) console.log();
}
console.log();
