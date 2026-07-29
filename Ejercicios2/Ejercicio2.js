//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Inserte el precio del producto ", function (precio) {
    rl.question("Inserte el porcentaje de descuento que se aplicara  ", function (porcentaje) {

            precio = parseFloat(precio);
            porcentaje = parseInt(porcentaje);

            const Porcen = porcentaje / 100
            const Ecuación = precio * Porcen
            const Total = precio - Ecuación

            console.log(`El total a pagar sin el descuento es de $${precio}`)
            console.log(`EL total que se pagara con el descuento es de $${Total}`)
            console.log(`lo que se quito fueron $${Ecuación}`)
            rl.close();
        })  
}
);