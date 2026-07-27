//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("¿cuál es su color favorito? ",function(color){
    console.log(`El color favorito del usuario es el ${color}`);
    rl.close();
});