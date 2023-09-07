alert('¡Bienvenido a cotizar gastos!');

let gastosAcumulados = 0;
let seguirComprando = true;

do {
    let gasto = prompt('¿Cuál es el servicio o producto que tienes que pagar?');
    let cantidad = Number(prompt(`¿Cuántos ${gasto} son?`));
    let precioUnitario = Number(prompt(`¿Cuál es el precio de cada ${gasto}?`));
    let totalGasto = cantidad * precioUnitario;
    gastosAcumulados += totalGasto;

    seguirComprando = confirm('¿Desea agregar otro gasto?');
} while (seguirComprando); 

let sueldo = Number(prompt('¿Cuál es tu sueldo total?'));

if (gastosAcumulados <= sueldo) {
    let ahorro = sueldo - gastosAcumulados;
    alert(`¡Bien! Tu sueldo cubre tus gastos. Te sobrarán $${ahorro}.`);
} else {
    let deuda = gastosAcumulados - sueldo;
    alert(`Lo siento, tus gastos superan a tu sueldo por $${deuda}.`);
}