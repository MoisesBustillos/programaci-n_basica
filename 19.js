// Ejercicio 19
function mostrarHora() {
    const fecha = new Date();
    console.log(fecha.toLocaleTimeString());
}

setInterval(mostrarHora, 1000);