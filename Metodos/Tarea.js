const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function ejecutarExperimento() {
    const rl = readline.createInterface({ input, output });

    try {
        // 1. Solicitar el nombre de la variable independiente (x) y dependiente (y)
        const nombreX = await rl.question("Ingrese el nombre de la variable independiente (x): ");
        const nombreY = await rl.question("Ingrese el nombre de la variable dependiente (y): ");

        // 2. Pedir la cantidad de valores a evaluar n (con la condición n > 1)
        const nStr = await rl.question("Ingrese la cantidad de valores a evaluar n (mayor a 1): ");
        const n = parseInt(nStr);

        if (n <= 1) {
            console.log("Error: La cantidad de valores debe ser mayor a 1.");
            rl.close();
            return;
        }

        let x = [];
        let y = [];

        // 3. Ingresar uno a uno los n valores para x y los n valores para y
        for (let i = 0; i < n; i++) {
            const valX = await rl.question(`Ingrese el valor de ${nombreX} (par ${i + 1}): `);
            const valY = await rl.question(`Ingrese el valor de ${nombreY} (par ${i + 1}): `);
            x.push(parseFloat(valX));
            y.push(parseFloat(valY));
        }

        rl.close();

        // Banderas lógicas de control
        let esDirecta = true;
        let esInversa = true;
        let kDirecta = 0;
        let kInversa = 0;

        // Establecer constantes de referencia con el primer par
        if (x[0] !== 0) {
            kDirecta = y[0] / x[0];
        } else {
            esDirecta = false;
        }
        kInversa = x[0] * y[0];

        // Evaluación iterativa para el resto de los pares
        for (let i = 1; i < n; i++) {
            // Evaluación de Proporcionalidad Directa (y / x = k)
            if (x[i] === 0 || (y[i] / x[i]) !== kDirecta) {
                esDirecta = false;
            }
            // Evaluación de Proporcionalidad Inversa (x * y = k)
            if ((x[i] * y[i]) !== kInversa) {
                esInversa = false;
            }
        }

        // 4. Evaluación lógica de condiciones y despliegue de resultados
        if (esDirecta) {
            console.log("\nProporcionalidad Directa");
            console.log("Constante k = " + kDirecta);
        } else if (esInversa) {
            console.log("\nProporcionalidad Inversa");
            console.log("Constante k = " + kInversa);
        } else {
            // 5. Mensaje si no cumple ninguna condición
            console.log("\nLos datos ingresados no cumplen con ninguna proporcionalidad.");
        }

    } catch (error) {
        console.error("Ocurrió un error en la entrada de datos:", error);
        rl.close();
    }
}

async function main() {
    let repetir = "si";
    
    // 6. Control de repetición del experimento
    while (repetir.toLowerCase() === "si" || repetir.toLowerCase() === "sí" || repetir.toLowerCase() === "s") {
        await ejecutarExperimento();
        
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        repetir = await rl.question("\n¿Desea realizar otro experimento? (Sí / No): ");
        rl.close();
    }

    console.log("Programa finalizado con éxito.");
}

main();