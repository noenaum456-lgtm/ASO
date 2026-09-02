//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Ingrese el código del departamento (ejemplo: DEP-VEN-2026-045):  ", function (codigo){

    codigo = codigo.toUpperCase();

    const departamento = codigo.slice (4,7);

    console.log(`El código ingresado es ${codigo}`)

    if(departamento == "VEN"){
        console.log(`El código pertenece al departamento de ventas`);
    }else{
        console.log(`El código no pertenece al departamento de ventas`)
    }

    rl.close();

})