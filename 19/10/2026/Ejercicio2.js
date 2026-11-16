import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registrarCalificaciones = (actual, cantidad, suma) => {
    if (actual > cantidad) {
        const promedio = suma / cantidad;
        const estado = promedio >= 6.0 ? "APROBADO" : "REPROBADO";

        console.log("\n--- RESUMEN ACADÉMICO ---");
        console.log(`Evaluaciones evaluadas: ${cantidad}`);
        console.log(`Suma de calificaciones: ${suma.toFixed(2)}`);
        console.log(`Promedio final: ${promedio.toFixed(2)}`);
        console.log(`Estado final: ${estado}`);

        rl.close();
        return;
    }

    rl.question(`Ingrese la nota de la evaluación ${actual} (0 - 10): `, (dato) => {
        const nota = parseFloat(dato);

        if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
            console.log("Error: La calificación debe ser un número entre 0 y 10.");
            registrarCalificaciones(actual, cantidad, suma); 
            return;
        }

        const nuevaSuma = suma + nota;
        console.log(`Nota ${actual} guardada: ${nota.toFixed(2)} | Suma acumulada: ${nuevaSuma.toFixed(2)}`);

        registrarCalificaciones(actual + 1, cantidad, nuevaSuma);
    });
};

rl.question("¿Cuántas evaluaciones desea registrar? ", (dato) => {
    const cantidad = parseInt(dato);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        registrarCalificaciones(1, cantidad, 0);
    } else {
        console.log("Error: Debe ingresar una cantidad de evaluaciones mayor a 0.");
        rl.close();
    }
});