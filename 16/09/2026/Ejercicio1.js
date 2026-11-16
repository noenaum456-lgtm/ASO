import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("CONVERSIÓN DE MEDIDAS");
console.log("1. Metros a centimetros");
console.log("2. Kilometros a metros");
console.log("3. Horas a minutos");
console.log("4. Días a horas");

rl.question("Ingrese la opción que desea realizar (1, 2, 3 o 4)): ", (opción) => {
    rl.question("Inserte la cantidad que desea convertir: ", (converción) => {

        opción = parseInt(opción);
        let valorAConvertir = parseFloat(converción);
        let Resultado;

        switch (opción) {
            case 1:
                Resultado = valorAConvertir * 100;
                console.log(`La conversión de metros a centimetros es de: ${Resultado} cm`);
                break;
            case 2:
                Resultado = valorAConvertir * 1000;
                console.log(`La conversión de kilometros a metros es de: ${Resultado} m`);
                break;
            case 3:
                Resultado = valorAConvertir * 60;
                console.log(`La conversión de horas a minutos es de: ${Resultado} min`);
                break;
            case 4:
                Resultado = valorAConvertir * 24;
                console.log(`La conversión de días a horas es de: ${Resultado} horas`);
                break;
            default:
                console.log(`Opción no válida`);    
        }

        rl.close();
    });
});