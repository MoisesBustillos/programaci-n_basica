// Ejercio 15
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número: ', (input1) => {
  const num1 = parseInt(input1);
  rl.question('Introduce el segundo número: ', (input2) => {
    const num2 = parseInt(input2);
    const menor = Math.min(num1, num2);
    const mayor = Math.max(num1, num2);
    let cuentaNum = 0, sumaImpares2 = 0, cuentaPares = 0;

    for (let i = menor; i <= mayor; i++) {
      console.log(i);
      cuentaNum++;
      if (i % 2 === 0) {
        cuentaPares++;
      } else {
        sumaImpares2 += i;
      }
    }
    
    console.log(`Hay ${cuentaNum} números naturales entre ${menor} y ${mayor}, de los cuales ${cuentaPares} son pares y la suma de los impares es ${sumaImpares2}.`);
    rl.close();
  });
});
