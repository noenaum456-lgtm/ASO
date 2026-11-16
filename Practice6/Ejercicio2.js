const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese un número N para evaluar primalidad y listar primos: ', (input) => {
    let n = parseInt(input);

    if (isNaN(n) || n <= 0) {
        console.log('Por favor, ingrese un número entero mayor a 0.');
        readline.close();
        return;
    }

    // 1. Determinar si N es primo
    let esPrimo = true;
    if (n === 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo) {
        console.log(`El número ${n} SÍ es primo.`);
    } else {
        console.log(`El número ${n} NO es primo.`);
    }

    // 2. Mostrar todos los números primos desde 1 hasta N
    let primosHastaN = [];
    for (let num = 2; num <= n; num++) {
        let primoActual = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                primoActual = false;
                break;
            }
        }
        if (primoActual) {
            primosHastaN.push(num);
        }
    }

    console.log(`Números primos desde 1 hasta ${n}: ${primosHastaN.join(', ')}`);
    readline.close();
});