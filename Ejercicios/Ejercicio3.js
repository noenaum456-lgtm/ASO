//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Inserte una cantidad de horas ", function (hora) {

            hora = Number(hora);

            const segundos = (hora * 60)

            console.log(`La cantidad en minutos: ${segundos}`)
            rl.close();
        
}
);