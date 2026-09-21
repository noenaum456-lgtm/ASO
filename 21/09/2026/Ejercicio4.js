import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuántas entradas se vendieron diariamente? ", function(entradas) {
    const entradasDiarias = Number(entradas);
    let entradasTotales = 0;

    for (let dia = 1; dia <= 5; dia++) {
        entradasTotales = entradasTotales + entradasDiarias;
    }

    console.log(`Total de entradas vendidas en los 5 días: ${entradasTotales}`);
    rl.close();
});