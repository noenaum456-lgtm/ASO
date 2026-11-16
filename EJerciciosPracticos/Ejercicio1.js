import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let respaldos = 0;

rl.question("¿Cuál es el total de servidores?: ", function (Servidores) {
    const Cantidad = Number(Servidores);

    for (let i = 1; i <= Cantidad; i++) {
        if (i % 5 == 0) {
            console.log(`Necesita un respaldo crítico el ${i}° servidor`);
            respaldos++;
        }
    }

    console.log(`\nTotal de respaldos necesarios: ${respaldos}`);
    rl.close();
});