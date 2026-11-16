//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Inserte un número ", function (número) {
    const Número = Number(número);

    for(let i = 1; i <= 10; i++ ) {
        console.log(`${Número} * ${i} = ${Número * i}`)
    }
    rl.close()
})