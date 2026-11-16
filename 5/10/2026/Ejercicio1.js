import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function CalcularPrecioFinal(Precio){
    const descuento = Precio * 0.10
    const precioFinal = Precio - descuento

    return precioFinal
}

rl.question("¿Cual es el precio?",(dato)=>{
    const precio = parseFloat(dato);
    const total = CalcularPrecioFinal(precio);

    console.log(`Precio original: $${precio.toFixed(2)}`)
    console.log(`Precio Final con descuento: $${total.toFixed(2)}`)

    rl.close();
})