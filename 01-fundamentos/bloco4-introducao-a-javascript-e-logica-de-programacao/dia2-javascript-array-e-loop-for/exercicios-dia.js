// Exercícios 1 ao 7

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// -----
// Exercício 2

// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// console.log(soma);

// -----
// Exercício 3

// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// let mediaAritmetica = soma / numbers.length;
// console.log(mediaAritmetica);

// -----
// Exercício 4

// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// let mediaAritmetica = soma / numbers.length;
// console.log(mediaAritmetica);

// if (mediaAritmetica >= 20) {
//     console.log('Valor maior que 20.')
// } else {
//     console.log('Valor menor que 20.')
// }

// -----
// Exercício 5

// let maior = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > maior) {
//         maior = numbers[index];
//     }
// }

// console.log(maior);

// -----
// Exercício 6

// let impares = [];

// for (let index = 0 ; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         impares.push(numbers[index]);
//     }
// }
// if (impares.length > 0) {
//     console.log(impares.length);
//     console.log(impares);
// } else {
//     console.log('Nenhum valor ímpar encontrado');
// }

// -----
// Exercício 7

// let menor = numbers[0];

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] < menor) {
//         menor = numbers[index];
//     }
// }

// console.log('O menor número é: ' + menor + '.');

// -----
// Exercício 8

// let numeroInicial = 1;
// let numeroFinal = 25;
// let array = [];

// for (let index = numeroInicial; index <= numeroFinal; index += 1) {
//         array.push(index);
// }
// console.log(array);

// -----
// Exercício 9

// for (let index = 0; index < array.length; index += 1) {
//     console.log(array[index] / 2);
// }

// -----
// Exercício bônus - 1

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
// console.log(numbers);

// -----
// Exercício bônus - 2

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
// console.log(numbers);

// -----
// Exercício bônus - 3

// let numbersMultiplicados = [];

// let secondIndex = 1;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (secondIndex < numbers.length) {
//     numbersMultiplicados.push(numbers[index] * numbers[secondIndex]);
//     secondIndex = secondIndex + 1;
//   } else {
//     numbersMultiplicados.push(numbers[index] * 2);
//   }
// }

// console.log(numbersMultiplicados);
