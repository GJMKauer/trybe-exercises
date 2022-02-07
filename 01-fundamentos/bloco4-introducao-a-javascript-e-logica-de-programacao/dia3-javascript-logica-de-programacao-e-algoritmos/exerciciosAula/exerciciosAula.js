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

// -----

// 2. Criar um algoritmo que inverta uma palavra. Por exemplo, a palavra "banana" deveria virar "ananab".

// 1. Descobrir como inverter uma string no JavaScript.
// 2. (É possível fazer com loop for)
// 3. Declarar uma variável string para receber a palavra invertida.
// 4. Criar um loop for.
// 5. Esse loop for vai diminuir de 1 em 1 até o tamanho da minha string.
// 6. A cada loop, o valor atual do index será adicionado na variável da palavra invertida.
// 7. No final, crie um console.log que retorne o valor da variável.

// let word = "tryber";

// let palavraInvertida = '';

// for (let index = word.length - 1; index >= 0; index -= 1) {
//   palavraInvertida += word[index];
// }
// console.log(palavraInvertida);

// -----

// 3. Escreva um algoritmo que retorne a maior palavra de um array, e outro que retorne a menor. A array é:
// let array = ["java", "javascript", "python", "html", "css"];

// 1. Criar uma variável com o valor do array na posição 0 para que receba o valor alterado conforme o loop for (maior elemento).
// 2. Criar uma variável com o valor do array na posição 0 para que receba o valor alterado conforme o loop for (menor elemento).
// 3. Criar um loop for. Esse loop for vai aumentar de 1 em 1, e terminará no tamanho do array.
// 4. Criar um if/else em que se o tamanho do array na posição index for maior que o tamanho da variável palavraMaior, esse elemento do array será atribuído
// ao valor da variável palavaMaior; e caso seja menor que o tamanho da variável palavraMenor, esse elemento será atribuído ao valor da variável palavraMenor.
// 5. Criar um console.log para a palavraMaior.
// 6. Criar um console.log para a palavraMenor.

// let palavraMaior = array[0];
// let palavraMenor = array[0];

// for (index = 0; index < array.length; index += 1) {
//   if (array[index].length >= palavraMaior.length) {
//     palavraMaior = array[index];
//   } else if (array[index].length <= palavraMenor.length) {
//     palavraMenor = array[index];
//   }
// }
// console.log("A maior palavra é: " + palavraMaior);
// console.log("A menor palavra é: " + palavraMenor);

// -----

// 4. Retorne o maior número primo entre 0 e 50. (Números primos são aqueles divisíveis somente por 1 e por eles mesmos).

// 1. Descobrir como calcular se um número é primo utilizando os comandos do JavaScript.
//      O módulo dele por todos os números menores que ele tem que ser diferente de 0.
// 2. Criar uma variável para receber o valor do maior número primo.
// 3. Criar um loop for que iniciará em 0 e será igual ou menor que 50, e irá crescer de um em um.
// 4. Criar uma variável ePrimo e atribuir o valor dela de true.
// 5. Criar outro loop for que iniciará em 2, e irá parar quando chegar no tamanho do index, e irá crescer de um em um.
// 6. Colocar um if/else em que, se o index dividido por todos os divisores do segundo loop for for igual a 0, atribua o valor de ePrimo como false; se não, atribua o valor de maiorNumeroPrimo como index.
// 7. Criar um console.log para o maiorNumeroPrimo.

// let maiorNumeroPrimo = 0;

// for (let index = 0; index <= 50; index += 1) {
//   let ePrimo = true;
//   for (let index2 = 2; index2 < index; index2 += 1) {
//     if (index % index2 === 0) {
//       ePrimo = false;
//     }
//   }
//   if (ePrimo) {
//     maiorNumeroPrimo = index;
//   }
// }
// console.log(maiorNumeroPrimo);

// -----------------------------------

// Exercicio Bônus 1
// Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de
// asteriscos de lado de tamanho n.

// 1. Declarar uma variável para guardar a quantidade de asteriscos como uma string vazia.
// 2. Declarar uma variável n com um número qualquer, apenas para fins de código.
// 3. Abrir um for que inicia em 0, termina quando chegar no tamanho do número e aumenta de um em um.
// 4. Abrir um for dentro do for que inicia em 0, termina quando chegar no tamanho do número e aumenta
// de um em um.
// 5. Dentro desse segundo for, atribuir que a variável asterisco receberá a string asterisco a cada
// loop.
// 6. Dentro do primeiro for, abrir um console.log que irá mostrar a variável asterisco, e então
// atribuir o valor da variável asterisco como uma string vazia novamente para que ela "resete"
// para o próximo loop.

// let asterisco = '';
// let n = 5;

// for (let index = 0; index < n; index += 1) {
//   for (let index2 = 0; index2 < n; index2 += 1) {
//     asterisco += '*';
//   }
//   console.log(asterisco);
//   asterisco = '';
// }

// -----

// Exercicio Bônus 2
// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

// let asterisco = '';
// let n = 5;

// for (index = 0; index < n; index += 1) {
//   asterisco += '*';
//   console.log(asterisco);
// }

// -----

// Exercicio Bônus 3
// Agora inverta o lado do triângulo.

// let n = 5;
// let asterisco = '';
// let posicao = n;

// for (let index = 0; index < n; index += 1) {
//   for (let index2 = 0; index2 <= n; index2 += 1) {
//     if (index2 < posicao) {
//       asterisco += ' ';
//     } else {
//       asterisco += '*';
//     }
//   }
//   console.log(asterisco);
//   asterisco = '';
//   posicao -= 1;
// }

// -----

// Exercicio Bônus 4
// Faça uma pirâmide com n asteriscos de base.

// -----

// Exercicio Bônus 5
// Faça uma pirâmide com n asteriscos de base, que seja vazia no meio.

// -----

// Exercicio Bônus 6

// Faça um programa que diz se um número definido numa variável é primo ou não.
// 1. Declarar uma variável divisores igual a 1 (para se tornar 2 no futuro, e se um número tem apenas
// dois divisores, ele é primo).
// 2. Declarar uma variável numero, que recebe um número qualquer apenas para fins de código.
// 3. Abrir um for que iniciará em 2 (pois 0 e 1 não faz diferença), irá crescer até o tamanho do
// número, e irá crescer de um em um.
// 4. Abrir um if/else dentro do for em que, se o módulo do número pelo index for igual a 0, aumentar
// a variável divisores em um.
// 5. Fora do for abrir um if/else em que, se o número de divisores for igual a 2, imprima "número é
// primo"; se não, imprima "número não é primo".

// let divisores = 1;
// let numero = 7;

// for (let index = 2; index <= numero; index += 1) {
//   if (numero % index === 0) {
//     divisores += 1;
//   }
// }
// if (divisores === 2) {
//   console.log(numero + " é primo");
// } else {
//   console.log(numero + " não é primo");
// }
