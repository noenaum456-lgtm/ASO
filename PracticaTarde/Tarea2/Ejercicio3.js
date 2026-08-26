import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Inserte su año de nacimiento ", function (año) {

    let fecha = new Date();
    let añoactual = fecha.getFullYear();
    
    let edad = añoactual - año

    console.log(`En teoria deberia tener una edad de ${edad} años`)

    rl.close();
})  