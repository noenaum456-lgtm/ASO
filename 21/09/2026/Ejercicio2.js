import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuántas horas duró cada préstamo? ", function(horas) {
    const horasPrestamo = Number(horas);
    const tarifaPorHora = 2.25;
    let recaudacionTotal = 0;

    for (let prestamo = 1; prestamo <= 4; prestamo++) {
        recaudacionTotal = recaudacionTotal + (horasPrestamo * tarifaPorHora);
    }

    console.log(`Recaudación total de los 4 préstamos: $${recaudacionTotal.toFixed(2)}`);
    rl.close();
});