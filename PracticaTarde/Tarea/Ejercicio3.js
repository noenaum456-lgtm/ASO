let kilowattsConsumidos = 250;
let precioPorKilowatt = 0.15;

let costoBase = kilowattsConsumidos * precioPorKilowatt;
let impuesto = costoBase * 0.10;
let costoTotal = costoBase + impuesto;

console.log(`Consumo: ${kilowattsConsumidos} kWh`);
console.log(`Costo sin impuesto: $${costoBase.toFixed(2)}`);
console.log(`Impuesto (10%): $${impuesto.toFixed(2)}`);
console.log(`Costo total a pagar: $${costoTotal.toFixed(2)}`);