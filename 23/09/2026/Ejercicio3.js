//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
let defectuosos = 0

rl.question("¿Cuántos productos fabrico?: ", function (Productos) {
    const Cantidad = Number(Productos);

    for(let i = 1; i <= Cantidad; i++ ) {

        if (i % 3 == 0){
            console.log(`Defectuoso ${i}`)
            defectuosos++
        }
        console.log(`hay ${defectuosos} productos defectuosos`)
    }
    rl.close()
})