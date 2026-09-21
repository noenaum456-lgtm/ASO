import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuánto es el gasto diario en transporte? ", function(gasto) {
    const gastoDiario = Number(gasto);
    let gastoTotal = 0;

    for (let dia = 1; dia <= 6; dia++) {
        gastoTotal = gastoTotal + gastoDiario;
        console.log(`Día ${dia} gasto acumulado: $${gastoTotal.toFixed(2)}`);
    }

    console.log(`Gasto total al finalizar los 6 días: $${gastoTotal.toFixed(2)}`);
    rl.close();
});