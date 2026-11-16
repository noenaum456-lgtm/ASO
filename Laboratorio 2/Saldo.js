// 1- IMPORTAR MODULO
import readline from "node:readline";

// 2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let GB = 20;
const consumoDiario = 2;

// 3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("¿Cuántos días utilizara el servicio (ingrese entre 1 y 10)?: ", function (respuesta) {
    const dias = Number(respuesta);

    if (dias >= 1 && dias <= 10) {
        for (let i = 1; i <= dias; i++) {
            GB -= consumoDiario;

            let mensaje = `Día ${i}: Quedan ${GB} GB disponibles`;

            if (GB <= 4) {
                mensaje += " <<Saldo bajo>>";
            }

            console.log(mensaje);
        }
    } else {
        console.log("Error: El número de días debe estar entre 1 y 10.");
    }

    rl.close();
});