//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Ingrese su nombre:  ", function (nombre){

    let fecha = new Date();

    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let año = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    if(hora < 12){
        console.log(`buenos días ${nombre} un gusto saludarle`)
    }else{
        console.log(`Buenas tardes ${nombre} un gusto saludarle`)
    }

    console.log (`La fecha y hora actual es: ${dia}/${mes}/${año} y son las ${hora}:${minutos}:${segundos} `)

    rl.close();

})
