import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre ", function (nombre) {
    rl.question("Inserte su edad ", function (edad) {

        edad = parseInt(edad);

        if(edad >= 18){
            console.log(`${nombre} eres mayor de edad`);
        } else {
            console.log(`${nombre} eres menor de edad`);
        }

        rl.close()
    })
})