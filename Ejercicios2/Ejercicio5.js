//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Inserte la cantidad de Dolares a convertir en Euros ", function (Dolares) {
    rl.question("Inserte el precio del Euro ",function(Euro) {

            Dolares = parseFloat(Dolares);
            Euro = parseFloat(Euro)

            const Total = Dolares * Euro

            console.log(`El total de Dolares en Euros es de ${Total}e`)

            rl.close();
    });
            
});