// 1- IMPORTAR MÓDULO
import readline from "node:readline";

// 2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pagoTotal = 0;

// 3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("¿Cuántos días durará el trabajo?: ", function (respuesta) {
    const dias = Number(respuesta);

    for (let i = 1; i <= dias; i++) {
        let pagoDiario = 10; 

        if (i % 3 === 0) {
            pagoDiario += 5; 
            console.log(`Día ${i}: Gana $10 + $5 de bono = $${pagoDiario} (Bono recibido)`);
        } else {
            console.log(`Día ${i}: Gana $${pagoDiario}`);
        }

        pagoTotal += pagoDiario;
    }

    console.log(`El pago total al finalizar los ${dias} días es de: $${pagoTotal}`);
    rl.close();
});