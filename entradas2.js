//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("dame un número ",function(número){
    rl.question("dame otro número ",function(número2){
        
        número= Number(número);
        número2= Number(número2)

        let multi = número * número2

        console.log(`La multiplicación de los 2 números es: ${multi}`)
        rl.close();
    })
});