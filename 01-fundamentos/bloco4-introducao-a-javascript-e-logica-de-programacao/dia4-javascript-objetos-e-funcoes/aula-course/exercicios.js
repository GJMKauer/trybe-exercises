// ----- Objetos - Para Fixar 1

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//     },
// };


// ----- Objetos - Para Fixar 2

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');


// ----- Objetos - Para Fixar 3

// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];


// ----- Objetos - Para Fixar 4

// console.log(player.bestInTheWorld);
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

// ----- Objetos - Para Fixar 5

// console.log(player.medals);
// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');


// ------------------------------
// ----- For/in e for/of - Para Fixar 1

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };
// for (let key in names) {
//     console.log('Olá ' + names[key]);
// }


// ----- For/in e for/of - Para Fixar 2

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
// for (let key in car) {
//     console.log(key, car[key]);
// }


// ------------------------------
// ----- Funções - Exercício 1

// function soma(a, b) {
//     let somaF = a + b;

//     return somaF;
// }
// console.log('Soma: ' + soma(2, 3));

// function subtracao(a, b) {
//     let subtracaoF = a - b;

//     return subtracaoF;
// }
// console.log('Subtração: ' + subtracao(2, 3));

// function multiplicacao(a, b) {
//     let multiplicacaoF = a * b;

//     return multiplicacaoF;
// }
// console.log('Multiplicação: ' + multiplicacao(2, 3));

// function divisao(a, b) {
//     let divisaoF = a / b;

//     return divisaoF;
// }
// console.log('Divisão: ' + divisao(2, 3));

// function modulo(a, b) {
//     let moduloF = a % b;

//     return moduloF;
// }
// console.log('Módulo: ' + modulo(2, 3));


// // ----- Funções - Exercício 2

// function maiorDeDois(a, b) {
//     if (a > b) {
//         console.log('O primeiro número é maior que o segundo.');
//     } else {
//         console.log('O primeiro número é menor que o segundo.');
//     }
// }
// maiorDeDois(7,50);


// // ----- Funções - Exercício 3

// const a = 2;
// const b = 3;
// const c = 1;

// if (a > b && a > c) {
//     console.log("'a' é o maior número");
// } else if (b > a && b > c) {
//     console.log("'b' é o maior número");
// } else {
//     console.log("'c' é o maior número");
// }


// // ----- Funções - Exercício 4

// const a = 2;
// const b = 3;
// const c = 1;

// if (a > 0) {
//     console.log('positive');
// } else if (a < 0) {
//     console.log('negative');
// } else {
//     console.log('zero');
// }


// // ----- Funções - Exercício 5

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