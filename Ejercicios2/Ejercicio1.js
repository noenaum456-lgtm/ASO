//1- IMPORTAR MÓDULO
import readline from "node:readline";

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question("Inserte su nombre ", function (nombre) {
    rl.question("Inserte las horas trabajadas durante la semana  ", function (horas) {
        rl.question("Inserte el pago por cada hora trabajada ", function (pago) {

            horas = parseFloat(horas);
            pago = parseFloat(pago);

            const Total = horas * pago

            console.log(`EL total que pagara ${nombre}: es de $${Total}`)
            rl.close();
        })
    })
}
);