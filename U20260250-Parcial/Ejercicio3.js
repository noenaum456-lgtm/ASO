import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre completo del estudiante: ", function(Nombre) {
    rl.question("Ingrese el codigo de inscripción con el formato ING-2026-0845: ", function(Codigo) {

        let nombre = Nombre.toUpperCase();
        let codigo = Codigo.toUpperCase();
        let extraccion = codigo.slice(0, 3);
        let extraccion2 = codigo.slice(4, 8);
        let extraccion3 = codigo.slice(9, 13);
        let año = parseInt(extraccion2);

        if (año === 2026) {
            console.log("-------------------------------------------------------------");
            console.log(`-------------------------------------------------------------`);
            console.log(``);
            console.log(`TICKET DE INSCRIPCIÓN`);
            console.log(``);
            console.log("-------------------------------------------------------------");
            console.log(`-------------------------------------------------------------`);
            console.log(``);
            console.log(`Estudiante: ${nombre}`);
            console.log(`Código: ${codigo}`);
            console.log(``);
            console.log(`-------------------------------------------------------------`);
            console.log(``);
            console.log(`Carrera: ${extraccion}`);
            console.log(`Año: ${año}`);
            console.log(`Registro: ${extraccion3}`);
            console.log(``);
            console.log(`-------------------------------------------------------------`);
            console.log(``);
            console.log(`-------------------------------------------------------------`);
            console.log(`-------------------------------------------------------------`);
            console.log(``);
            console.log(`Estado: INSCRIPCIÓN VÁLIDA`);
            console.log(``);
            console.log(`-------------------------------------------------------------`);
            console.log(`-------------------------------------------------------------`);
            console.log(``);
        } else {
            console.log("-------------------------------------------------------------");
            console.log(`-------------------------------------------------------------`);
            console.log(``);
            console.log(`TICKET DE INSCRIPCIÓN`);
            console.log(``);
            console.log("-------------------------------------------------------------");
            console.log(`-------------------------------------------------------------`);
            console.log(``);
            console.log(`Estudiante: ${nombre}`);
            console.log(`Código: ${codigo}`);
            console.log(``);
            console.log(`-------------------------------------------------------------`);
            console.log(``);
            console.log(`Carrera: ${extraccion}`);
            console.log(`Año: ${año}`);
            console.log(`Registro: ${extraccion3}`);
            console.log(``);
            console.log(`-------------------------------------------------------------`);
            console.log(``);
            console.log(`Estado: INSCRIPCIÓN INVÁLIDA`);
            console.log(`-------------------------------------------------------------`);
            console.log(`-------------------------------------------------------------`);
            console.log(``);
        }

        rl.close();
    });
});