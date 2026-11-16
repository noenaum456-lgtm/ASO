import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const notas = [];

const registrarNotas = (actual, cantidad) => {
    // CASO BASE
    if (actual > cantidad) {
        console.log("--- RESULTADOS DE CALIFICACIONES ---");

        let aprobados = 0;
        let reprobados = 0;
        let notaMasAlta = notas[0];

        for (let i = 0; i < notas.length; i++) {
            if (notas[i] >= 6) {
                aprobados++;
            } else {
                reprobados++;
            }

            if (notas[i] > notaMasAlta) {
                notaMasAlta = notas[i];
            }
        }

        console.log(`Estudiantes aprobados (nota >= 6): ${aprobados}`);
        console.log(`Estudiantes reprobados: ${reprobados}`);
        console.log(`Nota más alta del grupo: ${notaMasAlta.toFixed(2)}`);
        rl.close();
        return;
    }

    rl.question(`Ingrese la nota del estudiante ${actual} (0 a 10): `, (input) => {
        const nota = Number(input);

        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log("Ingrese una nota válida entre 0 y 10.");
            registrarNotas(actual, cantidad);
        } else {
            notas.push(nota);
            // RECURSIVIDAD
            registrarNotas(actual + 1, cantidad);
        }
    });
};

rl.question("¿Cuántos estudiantes va a registrar?: ", (cantidad) => {
    const total = Number(cantidad);

    if (!Number.isInteger(total) || total <= 0) {
        console.log("Ingrese una cantidad entera y mayor que cero.");
        rl.close();
        return;
    }

    registrarNotas(1, total);
});