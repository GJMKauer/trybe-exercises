// Objetos e For/In

// Exercício 1

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// console.log('Bem-vinda, ' + info.personagem);


// Exercício 2

// info['recorrente'] = 'Sim';
// console.log(info);


// Exercício 3

// for (let key in info) {
//     console.log(key);
// }


// Exercício 4

// for (let key in info) {
//     console.log(info[key]);
// }


// Exercício 5

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };

//   for (let key in info) {
//       if (info[key] === 'Sim' && info2[key] === 'Sim') {
//           console.log('Ambos recorrentes');
//       } else 
//     console.log (info[key], 'e', info2[key]);
//   }


// Exercício 6

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0]['titulo'] + '"');

// Exercício 7

// leitor.livrosFavoritos[1] = {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
// };

// console.log(leitor.livrosFavoritos[1]);


// Exercício 8

// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');


// ------------------------------
// Funções

// Exercício 1

// function ePalindromo(palavra) {
//     let palavraInvertida = '';
//     for (let index = palavra.length - 1; index >= 0; index -= 1) {
//         palavraInvertida += palavra[index];
//     }
//     if (palavraInvertida === palavra) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(ePalindromo('arara'));


// Exercício 2

// function indiceMaiorValor(numeros) {
//     let indiceMaior = 0;
//     for (let index = 0; index < numeros.length; index += 1) {
//         if (numeros[indiceMaior] < numeros[index]) {
//             indiceMaior = index;
//         }
//     }
//     return indiceMaior;
// }
// console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));

// Exercício 3

// function indiceMenorValor(numeros) {
//     let indiceMenor = numeros[0];
//     for (let index = 0; index < numeros.length; index += 1) {
//         if (numeros[indiceMenor] > numeros[index]) {
//             indiceMenor = index;
//         }
//     }
//     return indiceMenor;
// }
// console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));


// Exercício 4

// function indiceMaiorCaracteres(caracteres) {
//     let indiceMaior = 0;
//     for (let index = 0; index < caracteres.length; index += 1) {
//         if (caracteres[indiceMaior].length < caracteres[index].length) {
//             indiceMaior = index;
//         }
//     }
//     return caracteres[indiceMaior];
// }
// console.log(indiceMaiorCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// Exercício 5

// function inteiroRepete(numeros) {
//     let contagemMaxima = 0;
//     let contagemAtual = 0;
//     let numeroQueRepete = numeros[0];

//     for (let index in numeros) {
//         for (let index2 in numeros) {
//             if (numeros[index] === numeros[index2]) {
//                 contagemAtual += 1;
//             }
//         }
//         if (contagemAtual > contagemMaxima) {
//             contagemMaxima = contagemAtual;
//             numeroQueRepete = index;
//         }
//         contagemAtual = 0;
//     }
//     return numeros[numeroQueRepete];
// }
// console.log(inteiroRepete([2, 3, 2, 5, 8, 2, 3]));


// Exercício 6

// function somaTotal(numero) {
//     let soma = 0;
//     for (let index = 0; index <= numero; index += 1) {
//         soma += index;
//     }
//     return soma;
// }
// console.log(somaTotal(5));


// Exercício 7




// ------------------------------

