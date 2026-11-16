import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const precios = [];

const registrarPrecios = (actual, cantidad) => {
    // CASO BASE
    if (actual > cantidad) {
        console.log("--- RESULTADOS DEL INVENTARIO ---");
        
        let sumaTotal = 0;
        let hayMayores = false;

        console.log("Precios mayores a $15.00:");
        for (let i = 0; i < precios.length; i++) {
            sumaTotal += precios[i];
            if (precios[i] > 15.00) {
                console.log(`- Producto ${i + 1}: $${precios[i].toFixed(2)}`);
                hayMayores = true;
            }
        }

        if (!hayMayores) {
            console.log("No se registraron precios mayores a $15.00.");
        }

        console.log(`Suma total de la compra: $${sumaTotal.toFixed(2)}`);
        rl.close();
        return;
    }

    rl.question(`Ingrese el precio del producto ${actual}: $`, (input) => {
        const precio = Number(input);

        if (isNaN(precio) || precio < 0) {
            console.log("Ingrese un precio válido mayor o igual a cero.");
            registrarPrecios(actual, cantidad);
        } else {
            precios.push(precio);
            // RECURSIVIDAD
            registrarPrecios(actual + 1, cantidad);
        }
    });
};

rl.question("¿Cuántos productos va a registrar?: ", (cantidad) => {
    const total = Number(cantidad);

    if (!Number.isInteger(total) || total <= 0) {
        console.log("Ingrese una cantidad entera y mayor que cero.");
        rl.close();
        return;
    }

    registrarPrecios(1, total);
});