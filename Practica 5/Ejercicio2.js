import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el primer número (a): ", (numAStr) => {
    rl.question("Ingrese el segundo número (b): ", (numBStr) => {
        rl.question("Ingrese el tercer número (c): ", (numCStr) => {
            
            let numA = parseFloat(numAStr);
            let numB = parseFloat(numBStr);
            let numC = parseFloat(numCStr);

            if (numA === numB && numB === numC) {
                console.log("Los tres números son iguales");
            } else if (numA !== numB && numB !== numC && numA !== numC) {
                console.log("Los tres números son diferentes");
            } else {
                console.log("Hay dos números iguales");
            }

            let mayor = numA;
            let menor = numA;

            if (numB > mayor) mayor = numB;
            if (numC > mayor) mayor = numC;

            if (numB < menor) menor = numB;
            if (numC < menor) menor = numC;

            console.log(`El número mayor es: ${mayor}`);
            console.log(`El número menor es: ${menor}`);

            if (numA < 0 || numB < 0 || numC < 0) {
                console.log("Hay números negativos");
            }

            rl.close();
        });
    });
});