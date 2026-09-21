import readline from "node:readline";

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("Ingrese el nombre del estudiante: ", function(Nombre) {
    rl.question("Ingrese el nombre del equipo: ", function(NombreEquipo) {
        rl.question("Ingrese la cantidad de horas solicitadas: ", function(Cantidad) {
                
                let fecha = new Date();

                let dia = fecha.getDate();
                let mes = fecha.getMonth() + 1;
                let año = fecha.getFullYear();
                let hora = fecha.getHours();
                let minutos = fecha.getMinutes();
                let segundos = fecha.getSeconds();


                let cantidad = parseFloat(Cantidad);
                let Equipo = NombreEquipo.toUpperCase();

                let TotalH = (Cantidad * 2.25).toFixed(2)

                if(hora < 12){
                    console.log("-------------------------------------------------------------")
                    console.log(`Prestamo registrado en jornada de mañana`)
                    console.log(`Las horas que ha puesto son de ${Cantidad} horas`)
                    console.log(`Nombre de la maquina: ${Equipo}`)
                    console.log (`La fecha y hora actual es: ${dia}/${mes}/${año} y son las ${hora}:${minutos}:${segundos} `)
                    console.log(`EL total por usar la maquina: ${TotalH}`)
                    console.log("-------------------------------------------------------------")

                }else{
                    console.log("-------------------------------------------------------------")
                    console.log(`Prestamo registrado en jornada de tarde`)
                    console.log(`Las horas que ha puesto son de ${Cantidad} horas`)
                    console.log(`Nombre de la maquina: ${Equipo}`)
                    console.log (`La fecha y hora actual es: ${dia}/${mes}/${año} y son las ${hora}:${minutos}:${segundos} `)
                    console.log(`EL total por usar la maquina: $${TotalH}`)
                    console.log("-------------------------------------------------------------")
                }

                rl.close();
            });
        });
    });