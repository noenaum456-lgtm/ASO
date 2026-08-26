import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Inserte su nombre completo ", function (nombre) {

    let NombreMayuscula = nombre.toUpperCase();

    let palabra = nombre;
    let resultado = palabra.slice(0, 3);

    let NombreMinuscula = resultado.toLowerCase();

    console.log(NombreMayuscula); 
    console.log(resultado);       
    console.log(NombreMinuscula)

    rl.close();
})  