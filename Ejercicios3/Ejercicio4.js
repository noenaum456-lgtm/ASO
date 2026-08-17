import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su nombre: ", function(nombre) {
  rl.question("Ingrese su apellido: ", function(apellido) {
    rl.question("Ingrese su año de ingreso: ", function(añoIngreso) {
      rl.question("Ingrese su cuota mensual: ", function(cuotaMensual) {

        const nombreMayuscula = nombre.toUpperCase();
        const apellidoMayuscula = apellido.toUpperCase();

        const tresLetrasApellido = apellidoMayuscula.slice(0, 3);

        const añoTexto = añoIngreso.toString();
        const ultimosDosDigitosAño = añoTexto.slice(-2);

        const cuotaFormateada = parseFloat(cuotaMensual).toFixed(2);

        console.log(`Nombre en mayúsculas: ${nombreMayuscula}`);
        console.log(`Apellido en mayúsculas: ${apellidoMayuscula}`);
        console.log(`Primeras 3 letras del apellido: ${tresLetrasApellido}`);
        console.log(`Año de ingreso (texto): "${añoTexto}"`);
        console.log(`Últimos dos dígitos del año: ${ultimosDosDigitosAño}`);
        console.log(`Cuota mensual: $${cuotaFormateada}`);

        rl.close();
      });
    });
  });
});