import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const UMBRAL_CONSUMO_ELEVADO = 15;

const registrarConsumo = (actual, cantidad, totalKwh, equiposElevados) => {
    if (actual > cantidad) {
        console.log("\n--- RESUMEN DE CONSUMO ELÉCTRICO ---");
        console.log(`Total de equipos registrados: ${cantidad}`);
        console.log(`Consumo total registrado: ${totalKwh.toFixed(2)} kWh`);
        console.log(`Equipos con consumo elevado (> ${UMBRAL_CONSUMO_ELEVADO} kWh): ${equiposElevados}`);
        rl.close();
        return;
    }

    rl.question(`Ingrese el consumo del equipo ${actual} en kWh: `, (dato) => {
        const kwh = parseFloat(dato);

        if (!Number.isFinite(kwh) || kwh < 0) {
            console.log("Error: Ingrese un valor de consumo válido (mayor o igual a 0).");
            registrarConsumo(actual, cantidad, totalKwh, equiposElevados); 
            return;
        }

        let nuevoEquiposElevados = equiposElevados;
        if (kwh > UMBRAL_CONSUMO_ELEVADO) {
            console.log(`[ALERTA] El equipo ${actual} presenta un consumo elevado (${kwh.toFixed(2)} kWh).`);
            nuevoEquiposElevados++;
        }

        const nuevoTotalKwh = totalKwh + kwh;

        registrarConsumo(actual + 1, cantidad, nuevoTotalKwh, nuevoEquiposElevados);
    });
};

rl.question("¿Cuántos equipos desea registrar?: ", (dato) => {
    const cantidad = parseInt(dato);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        registrarConsumo(1, cantidad, 0, 0);
    } else {
        console.log("Ingresa una cantidad válida de equipos (entero mayor a 0).");
        rl.close();
    }
});