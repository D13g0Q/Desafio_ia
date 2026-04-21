
const readline = require('readline');

// Configurar entrada desde el teclado
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que verifica palíndromo
function esPalindromo(texto) {
    // Convertir a string y normalizar
    let str = String(texto).toLowerCase();
    // Invertir la cadena
    let invertido = str.split('').reverse().join('');
    return str === invertido;
}
rl.question("Ingresa una palabra o numero: ", function(input) {
    if (esPalindromo(input)) {
        console.log(" Es un palíndromo");
    } else {
        console.log(" No es un palíndromo");
    }
    rl.close();
});
