import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre empleado ", function (nombre) {
    rl.question("Inserte su salario empleado ", function (salario) {
        rl.question("Inserte los años que tiene trabajando en la empresa ", function (años){

            salario = parseFloat(salario);

        if(años >= 5){

            let total = salario + (salario * 0.10)

            console.log(`${nombre} como tiene algo de tiempo trabajando para nosotros`);
            console.log(`le aplicaremos una bonificación del 10%`)
            console.log(`en total su salario le quedaría en  ${total}`)
        } else {
            console.log(`${nombre} me alegro tenerlo en mi empresa`);
        }

        rl.close()
        })
    })
})