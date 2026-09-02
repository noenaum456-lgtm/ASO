//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Ingrese el nombre del equipo: ", function (nombre) {
    rl.question("Ingrese la temperatura actual en grados Celsius: ", function (temperatura) {
        
        let tempNum = parseFloat(temperatura);
        let nombreMayusculas = nombre.toUpperCase();

        if (tempNum > 70) {
            console.log(`El equipo ${nombreMayusculas} a ${tempNum.toFixed(1)} °C NECESITA REVISIÓN.`);
        } else {
            console.log(`El equipo ${nombreMayusculas} a ${tempNum.toFixed(1)} °C se encuentra dentro del rango permitido.`);
        }

        rl.close();
    });
});