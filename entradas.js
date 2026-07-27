//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("¿en que ciudad vives? ",function(ciudad){
    console.log(`El usuario vive en ${ciudad}`);
    rl.close();
});