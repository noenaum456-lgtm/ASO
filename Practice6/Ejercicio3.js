const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuántas calificaciones desea ingresar? ', (cantidadInput) => {
    let totalCalificaciones = parseInt(cantidadInput);

    if (isNaN(totalCalificaciones) || totalCalificaciones <= 0) {
        console.log('Cantidad inválida.');
        rl.close();
        return;
    }

    let calificaciones = [];

    function pedirCalificacion(index) {
        if (index < totalCalificaciones) {
            rl.question(`Ingrese la calificación ${index + 1}: `, (calInput) => {
                let cal = parseFloat(calInput);
                if (isNaN(cal)) {
                    console.log('Valor no válido. Intente de nuevo.');
                    pedirCalificacion(index);
                } else {
                    calificaciones.push(cal);
                    pedirCalificacion(index + 1);
                }
            });
        } else {
            // Procesamiento de datos al terminar el bucle de entradas
            let suma = 0;
            let max = calificaciones[0];
            let min = calificaciones[0];

            for (let i = 0; i < calificaciones.length; i++) {
                let nota = calificaciones[i];
                suma += nota;
                if (nota > max) max = nota;
                if (nota < min) min = nota;
            }

            let promedio = suma / totalCalificaciones;

            console.log('\n--- Resultados ---');
            console.log(`Promedio final: ${promedio.toFixed(2)}`);
            console.log(`Calificación más alta: ${max}`);
            console.log(`Calificación más baja: ${min}`);

            rl.close();
        }
    }

    pedirCalificacion(0);
});