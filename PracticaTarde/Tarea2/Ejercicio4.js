let fecha = new Date();

let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let año = fecha.getFullYear();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

console.log (`La fecha y hora actual es: ${dia}/${mes}/${año} y son las ${hora}:${minutos}:${segundos} `)
