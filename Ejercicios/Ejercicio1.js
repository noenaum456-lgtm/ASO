//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Inserte una nota ", function (número) {
    rl.question("Inserte otra nota ", function (número2) {
        rl.question("Inserte una ultima nota", function (número3) {

            número = Number(número);
            número2 = Number(número2);
            número3 = Number(número3);

            const Prom = (número + número2 + número3) / 3

            console.log(`El promedio de sus notas es: ${Prom}`)
            rl.close();
        })
    })
}
);