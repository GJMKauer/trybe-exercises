const a = 2;
const b = 3;
const c = 1;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

if (a > b) {
    console.log("'a' é maior que 'b'");
} else {
    console.log("'a' é menor que 'b'");
}

if (a > b && a > c) {
    console.log("'a' é o maior número");
} else if (b > a && b > c) {
    console.log("'b' é o maior número");
} else {
    console.log("'c' é o maior número");
}

if (a > 0) {
    console.log('positive');
} else if (a < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

let trianguloA = 100;
let trianguloB = 30;
let trianguloC = 50;

let trianguloTotal = trianguloA + trianguloB + trianguloC;

let trianguloValido = trianguloA > 0 && trianguloB > 0 && trianguloC > 0;

if (trianguloValido) {
    if (trianguloTotal === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: não é um triângulo');
}