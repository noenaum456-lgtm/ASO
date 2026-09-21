import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuánto ahorra por día? ", function(ahorro) {
    const cantidad = Number(ahorro);
    let AhorroTotal = 0;

    for (let dia = 1; dia <= 5; dia++) {
        AhorroTotal = AhorroTotal + cantidad;
    }

    console.log(`Ahorro total al finalizar los 5 días: $${AhorroTotal.toFixed(2)}`);
    rl.close();
});