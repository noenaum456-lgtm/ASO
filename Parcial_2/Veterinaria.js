import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registrarConsultas = (actual, cantidad, perros, gatos) => {
    if (actual > cantidad) {
        console.log(`Total de perros atendidos: ${perros}`);
        console.log(`Total de gatos atendidos: ${gatos}`);
        rl.close();
        return;
    }

    rl.question(`Consulta ${actual} de ${cantidad} - Ingrese tipo de animal (1: Perro, 2: Gato): `, (respuesta) => {
        const tipo = parseInt(respuesta);

        if (tipo === 1) {
            console.log(" Animal registrado: Perro");
            registrarConsultas(actual + 1, cantidad, perros + 1, gatos);
        } else if (tipo === 2) {
            console.log(" Animal registrado: Gato");
            registrarConsultas(actual + 1, cantidad, perros, gatos + 1);
        } else {
            console.log(" Opción inválida. Por favor, ingrese 1 o 2.");
            registrarConsultas(actual, cantidad, perros, gatos);
        }
    });
};

rl.question("¿Cuál es la cantidad total de consultas atendidas?: ", (dato) => {
    const cantidad = parseInt(dato);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        registrarConsultas(1, cantidad, 0, 0);
    } else {
        console.log("Por favor, ingresa una cantidad válida mayor a 0.");
        rl.close();
    }
});