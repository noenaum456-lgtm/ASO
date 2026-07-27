//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Inserte el nombre del producto ", function (nombre) {
    rl.question("Inserte el precio del producto ", function (precio) {
        rl.question("Inserte la cantidad del producto", function (cantidad) {

            precio = Number(precio);
            cantidad = Number(cantidad);

            const Total = precio * cantidad

            console.log(`EL total a pagar del producto ${nombre}: ${Total}`)
            rl.close();
        })
    })
}
);