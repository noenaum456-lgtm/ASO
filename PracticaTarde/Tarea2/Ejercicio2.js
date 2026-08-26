import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Inserte el nombre del producto ", function (producto) {
    rl.question("Inserte el precio del producto ", function (precio) {
        rl.question("Inserte la cantidad del producto ", function (cantidad){

            let NombreMayuscula = producto.toUpperCase();

            let palabra = producto;
            let resultado = palabra.slice(0, 3);

            let Total = (precio * cantidad).toFixed(2)

            console.log(`Este es el nombre en mayuscula ${NombreMayuscula}`); 
            console.log(`Esta son las primeras 3 letras ${resultado}`);
            console.log(`El precio de cada producto es de $${precio}`)       
            console.log(`El total es de $${Total}`)

            rl.close();

        })

    })

    
})  