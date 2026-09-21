import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el nombre del empleado: ", function(nombreInput) {
    rl.question("Ingrese la cantidad de productos elaborados: ", function(elaboradosInput) {
        rl.question("Ingrese la cantidad de productos defectuosos: ", function(defectuososInput) {

            let elaborados = parseInt(elaboradosInput);
            let defectuosos = parseInt(defectuososInput);
            let nombre = nombreInput.toUpperCase();

            let productosCorrectos = elaborados - defectuosos;
            
            let porcentaje = ((productosCorrectos / elaborados) * 100).toFixed(2);

            if (porcentaje >= 95) {
                console.log("-------------------------------------------------------------");
                console.log(`Producción aceptada`);
                console.log(`Nombre del empleado: ${nombre}`);
                console.log(`Cantidad de productos correctos: ${productosCorrectos}`);
                console.log(`El porcentaje obtenido es del: ${porcentaje}%`);
                console.log("-------------------------------------------------------------");
            } else {
                console.log("-------------------------------------------------------------");
                console.log(`Producción requiere revisión`);
                console.log(`Nombre del empleado: ${nombre}`);
                console.log(`Cantidad de productos correctos: ${productosCorrectos}`);
                console.log(`El porcentaje obtenido es del: ${porcentaje}%`);
                console.log("-------------------------------------------------------------");
            }

            rl.close();
        });
    });
});