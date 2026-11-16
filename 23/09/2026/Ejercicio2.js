//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("¿cuántos boletos necesita?: ", function (Boletos) {
    const Cantidad = Number(Boletos);

    for(let i = 1; i <= Cantidad; i++ ) {
        let $Boleto = 4

        if (i >= 5){
            $Boleto = $Boleto - 1
            console.log(`Boleto ${Cantidad}: Tiene descuento. Precio: $${$Boleto.toFixed(2)}`);
        }
        else {
            console.log(`Boleto ${Cantidad}: No tiene descuento. Precio: $${$Boleto.toFixed(2)}`)
        }
    }
    rl.close()
})