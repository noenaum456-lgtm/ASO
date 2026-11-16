import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pedidos =[];

const registrarPedidos = (actual, cantidad)=>{

    //CASO BASE
    if(actual > cantidad){
        console.log("**CANCELACIÓN DE PEDIDO**");

        let cancelado = pedidos.pop();

        console.log(`pedido cancelado ${cancelado}`);
        console.log("PEDIDOS RESATANTES:");

        for(let i = 0; i < pedidos.length;i++){
            console.log(`Pedido ${i+1}:${pedidos[i]}`);

        }
        console.log(`Pedidos restantes: ${pedidos.length}`)
        rl.close();
        return;
        
    }

    rl.question(`Ingrese el código del pedido ${actual}:`,(codigo)=>{

        pedidos.push(codigo);

        //RECURSIVIDAD
        registrarPedidos(actual +1, cantidad);
    })
}

rl.question("¿Cuántos pedidos desea registrar?:", (cantidad)=>{

    const total= Number(cantidad);

    if(!Number.isInteger(total)|| total <=0){
        console.log("Ingrese una cantidad entera y mayor que cero");
        rl.close();
        return;
    }

    rwgistrarPedidos(1, total);
})