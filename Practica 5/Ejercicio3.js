import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;

function mostrarMenu() {
    console.log("\n*** MENÚ DEL CAJERO ***");
    console.log("1. Consultar saldo");
    console.log("2. Retirar dinero");
    console.log("3. Depositar dinero");
    console.log("4. Salir");

    rl.question("Seleccione una opción (1-4): ", (opcionStr) => {
        let opcion = parseInt(opcionStr);

        switch (opcion) {
            case 1:
                console.log(`Su saldo actual es: $${saldo}`);
                mostrarMenu(); 
                break;
                
            case 2:
                rl.question("Ingrese el monto a retirar: $", (retiroStr) => {
                    let retiro = parseFloat(retiroStr);
                    if (retiro > 0 && retiro % 5 === 0 && retiro <= saldo) {
                        saldo -= retiro;
                        console.log(`Retiro exitoso. Su nuevo saldo es: $${saldo}`);
                    } else if (retiro <= 0) {
                        console.log("Error: El monto debe ser mayor a 0");
                    } else if (retiro % 5 !== 0) {
                        console.log("Error: El monto debe ser múltiplo de $5");
                    } else if (retiro > saldo) {
                        console.log("Error: Fondos insuficientes");
                    }
                    mostrarMenu(); 
                });
                break;
                
            case 3:
                rl.question("Ingrese el monto a depositar: $", (depositoStr) => {
                    let deposito = parseFloat(depositoStr);
                    if (deposito > 0 && deposito <= 5000) {
                        saldo += deposito;
                        console.log(`Depósito exitoso. Su nuevo saldo es: $${saldo}`);
                    } else if (deposito <= 0) {
                        console.log("Error: El monto a depositar debe ser mayor a 0");
                    } else if (deposito > 5000) {
                        console.log("Error: No puede depositar más de $5000 en una sola transacción");
                    }
                    mostrarMenu(); 
                });
                break;
                
            case 4:
                console.log("Gracias por usar el cajero");
                rl.close(); 
                break;
                
            default:
                console.log("Opción no válida");
                mostrarMenu(); 
                break;
        }
    });
}

mostrarMenu();