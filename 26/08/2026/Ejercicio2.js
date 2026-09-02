import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el total de su compra ", function (compra) {

        compra = parseInt(compra);

        if(compra >= 50){
            console.log("Su compra aplica a envío gratis");
        } else {
            console.log("Su compra no aplica a envio gratis");
        }

        rl.close()
    })