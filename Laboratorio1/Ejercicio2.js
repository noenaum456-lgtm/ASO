import readline from "node:readline";

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("Inserte el nombre de la persona: ", function (nombre) {
    rl.question("Inserte la cantidad de días que trabaja al mes: ", function (dias) {
        rl.question("Inserte el gasto diario en desayuno: ", function (desayuno) {
            rl.question("Inserte el gasto diario en almuerzo: ", function (almuerzo) {
                rl.question("Inserte el gasto diario del transporte en el que va a ingerir sus alimentos: ", function (transporte) {

                    const numDias = parseFloat(dias);
                    const numDesayuno = parseFloat(desayuno);
                    const numAlmuerzo = parseFloat(almuerzo);
                    const numTransporte = parseFloat(transporte);

                    const totalDiario = numDesayuno + numAlmuerzo + numTransporte;
                    const totalMensual = totalDiario * numDias;

                    console.log(`El total de gasto diario es: $${totalDiario}`);
                    console.log(`El total de gasto mensual es: $${totalMensual}`);

                    rl.close();
                });
            });
        });
    });
});