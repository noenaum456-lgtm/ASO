const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese un número entero positivo para calcular su factorial: ', (input) => {
    let n = parseInt(input);

    if (isNaN(n) || n < 0) {
        console.log('Por favor, ingrese un número entero positivo válido.');
        readline.close();
        return;
    }

    let factorial = 1;
    let secuencia = [];

    for (let i = n; i >= 1; i--) {
        factorial *= i;
        secuencia.push(i);
    }

    console.log(`Resultado: ${n}! = ${secuencia.join(' × ')} = ${factorial}`);
    readline.close();
});