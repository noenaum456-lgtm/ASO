//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Inserte la base del rectángulo ", function (base) {
    rl.question("Inserte la altura del rectángulo ", function (altura) {

            base = Number(base);
            altura = Number(altura);

            const área = (base * altura)

            console.log(`El área de tu rectángulo: ${área}`)
            rl.close();
        
    })
}
);