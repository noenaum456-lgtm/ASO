//1- IMPORTAR MÓDULO
import readline, { createInterface } from "node:readline"

//2- CREAMOS LA INTERFAZ
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Ingrese un dato cualquiera: ", function(dato){

    let datoparseado = parseFloat(dato);
    let datoisNaN = isNaN(dato)

    console.log(`
El dato ingresado por el usuario: ${dato}
El resultado obtenido al utilizar parseFloat(): ${datoparseado}
El valor retornado por isNan(): ${datoisNaN}
        `)

    rl.close()
})