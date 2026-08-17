import readline from "node:readline";

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("Ingrese su nombre: ", function(nombre) {
    rl.question("Ingrese la cantidad de páginas que desea imprimir: ", function(Paginas) {
        rl.question("Ingrese el costo de impresión por página: ", function(costo) {
            rl.question("Ingrese la cantidad de copias que necesita el documento: ", function(copias) {

                const paginas = parseFloat(Paginas);
                const costoPorPagina = parseFloat(costo);
                const Copias = parseFloat(copias);

                const costoUnaCopia = paginas * costoPorPagina;
                const costoTotal = costoUnaCopia * copias;
                const costoTotalTrabajo = costoUnaCopia + costoTotal

                console.log(`El costo de una copia completa: $${costoUnaCopia}`);
                console.log(`El costo total por las ${copias} copias: $${costoTotal}`);
                console.log(`El costo total del trabajo es $${costoTotalTrabajo}`)

                rl.close();
            });
        });
    });
});