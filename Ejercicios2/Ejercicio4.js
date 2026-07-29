//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Inserte el precio unitario del producto ", function (precio) {
    rl.question("Inserte la cantidad del producto a comprar  ", function (cantidad) {

            precio = parseFloat(precio);
            cantidad = parseInt(cantidad);

            const Total = precio * cantidad

            console.log(`El total a pagar es de $${Total}`)

            rl.close();
        })  
}
);  