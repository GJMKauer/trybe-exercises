// 1. Criar um algoritmo que retorne o fatorial de 10.

// 1. Saber que 10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 3628800;
// 2. Criar uma variável para armazenar o valor do fatorial de 10.
// 3. Criar um loop for.
// 4. Esse loop for vai diminuir de 1 em 1.
// 5. A cada loop, o valor atual do index será multiplicado com o próximo número.
// 6. No final, crie um console.log que retorne o valor da variável.

// let fatorialDez = 1;

// for (index = 10; index >= 1; index -= 1) {
//     fatorialDez *= index;
// }
// console.log(fatorialDez);

// 2. Criar um algoritmo que inverta uma palavra. Por exemplo, a palavra "banana" deveria virar "ananab".

// 1. Descobrir como inverter uma string no JavaScript.
// 2. (É possível fazer com loop for)
// 3. Declarar uma variável string para receber a palavra invertida.
// 4. Criar um loop for.
// 5. Esse loop for vai diminuir de 1 em 1 até o tamanho da minha string.
// 6. A cada loop, o valor atual do index será adicionado na variável da palavra invertida.
// 7. No final, crie um console.log que retorne o valor da variável.

let word = 'tryber';

let palavraInvertida = '';

for (let index = word.length; index >= 0; index -= 1) {
    palavraInvertida += word[index];
}
console.log(palavraInvertida);

// FALTA TERMINAR ESSE EXERCÍCIO AQUI!!!









// 3. Escreve um algoritmo que retorne a maior palavra de um array, e outro que retorne a menor. A array é:
let array = ['java', 'javascript', 'python', 'html', 'css'];

// 1. Criar uma variável que receba o array[n].length para cada elemento do array.
// 2. Criar um if em que, se uma variável for maior que todas as outras, será impressa.
// 3. Criar um else if em que, se uma variável for menor que todas as outras, será impressa.

let palavraMaior;
let palavraMenor;

for (index = 0; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
        if (array[index].length > array[secondIndex].length) {
            palavraMaior = array[index];
        } else if (array[index].length < array[secondIndex].length) {
            palavraMenor = array[index];
        }
    }
}
console.log('A maior palavra é: ' + palavraMaior);
console.log('A menor palavra é: ' + palavraMenor);