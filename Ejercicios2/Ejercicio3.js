//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Inserte una longitud expresada en metros ", function (metros) {

        metros = parseFloat(metros);

            const Centimetros = metros * 100

            console.log(`Los centimetros convertidos en metros son ${Centimetros}`)

            rl.close();
})