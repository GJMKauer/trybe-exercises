// const a = 2;
// const b = 3;
// const c = 1;

// console.log('Soma: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));

// if (a > b) {
//     console.log("'a' é maior que 'b'");
// } else {
//     console.log("'a' é menor que 'b'");
// }

// if (a > b && a > c) {
//     console.log("'a' é o maior número");
// } else if (b > a && b > c) {
//     console.log("'b' é o maior número");
// } else {
//     console.log("'c' é o maior número");
// }

// if (a > 0) {
//     console.log('positive');
// } else if (a < 0) {
//     console.log('negative');
// } else {
//     console.log('zero');
// }

// let trianguloA = 100;
// let trianguloB = 30;
// let trianguloC = 50;

// let trianguloTotal = trianguloA + trianguloB + trianguloC;

// let trianguloValido = trianguloA > 0 && trianguloB > 0 && trianguloC > 0;

// if (trianguloValido) {
//     if (trianguloTotal === 180) {
//         console.log(true);
//     } else {
//         console.log(false);
//     };
// } else {
//     console.log('Erro: não é um triângulo');
// }

// const peca = 'Peão';

// switch (peca.toLowerCase()) {
//     case 'rei':
//         console.log('Rei: Move uma casa em todas as direções.');
//         break;
//     case 'rainha':
//         console.log('Rainha: Move quantas casas quiser, em todas as direções.');
//         break;
//     case 'torre':
//         console.log('Torre: Move quantas casas quiser, apenas para frente e para os lados.');
//         break;
//     case 'cavalo':
//         console.log('Cavalo: Move três peças para frente e uma para o lado, em L. Em qualquer direção.');
//         break;
//     case 'bispo':
//         console.log('Bispo: Move quantas casas quiser, apenas nas diagonais.');
//         break;
//     case 'peão':
//         console.log('Peão: Move uma casa para frente. Mata na diagonal. Na primeira mexida, cada peão pode andar duas casas.');
//         break;
//     default:
//         console.log('Erro: não é uma peça de xadrez.');
// }

// let nota = 99;

// if (nota >= 90 && nota <= 100) {
//     console.log('A');
// } else if (nota >= 80  && nota <= 100) {
//     console.log('B');
// } else if (nota >= 70  && nota <= 100) {
//     console.log('C');
// } else if (nota >= 60  && nota <= 100) {
//     console.log('D');
// } else if (nota >= 50  && nota <= 100) {
//     console.log('E');
// } else if (nota >= 0 && nota < 50) {
//     console.log('F');
// } else {
//     console.log('Erro: Nota inválida.');
// }

// const numeroA = 2;
// const numeroB = 4;
// const numeroC = 8;

// let isImpar = false;

// if (numeroA % 2 === 0 && numeroB % 2 === 0 && numeroC % 2 ===0) {
//     isImpar = true;
// }
// console.log(isImpar);

// const numeroA = 2;
// const numeroB = 4;
// const numeroC = 5;

// let isImpar = false;

// if (numeroA % 2 !== 0 || numeroB % 2 !== 0 || numeroC % 2 !== 0) {
//     isImpar = true;
// }
// console.log(isImpar);

// const custo = -100;
// const valorVenda = 1200;
// const impostoSobreOCusto = custo * 0.2;

// const valorCustoTotal = custo + impostoSobreOCusto;
// const lucro = valorVenda - valorCustoTotal;
// const lucroMil = lucro * 1000;

// if (custo >= 0 && valorVenda >= 0) {
//     console.log('Lucro ao vender 1000 unidades: ' + lucroMil);
// } else {
//     console.log('Erro: Não é possível calcular. Um dos valores é inferior a 0.');
// }

// let salario = 3000;
// let inssOito = salario - salario * 0.08;
// let inssNove = salario - salario * 0.09;
// let inssOnze = salario - salario * 0.11;
// let inssMax = salario - 570.88;

// if (salario <= 1556.94) {
//   salario = inssOito;
// } else if (salario <= 2594.92) {
//   salario = inssNove;
// } else if (salario <= 5189.82) {
//   salario = inssOnze;
// } else {
//   salario = inssMax;
// }

// if (salario <= 1903.98) {
//   salario = salario;
//   console.log("Valor líquido a ser recebido: R$ " + salario);
// } else if (salario <= 2826.65) {
//   let irDois = salario * 0.075 - 142.8;
//   salario = salario - irDois;
//   console.log("Valor líquido a ser recebido: R$ " + salario);
// } else if (salario <= 3751.05) {
//   let irTres = salario * 0.15 - 354.8;
//   salario = salario - irTres;
//   console.log("Valor líquido a ser recebido: R$ " + salario);
// } else if ((salario <= 4664, 68)) {
//   let irQuatro = salario * 0.225 - 636.13;
//   salario = salario - irQuatro;
//   console.log("Valor líquido a ser recebido: R$ " + salario);
// } else {
//   let irCinco = salario * 0.275 - 869.36;
//   salario = salario - irCinco;
//   console.log("Valor líquido a ser recebido: R$ " + salario);
// }
