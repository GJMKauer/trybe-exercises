// // Array.reduce
// // Com o For:
// const numbers = [32, 15, 3, 2, -5, 56, 10];
// let sumNumbers = 0;
// // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

// for (let index = 0; index < numbers.length; index += 1) {
//   sumNumbers += numbers[index];
// }
// console.log(sumNumbers); // 113

// // --
// // Com o reduce:
// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

// // Ou seja:

// const getSum = (result, number) => result + number;
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

// const collection = [1, 2, 3, 4, 5];

// const getSum = (accumulator, number) => {
//   console.log(accumulator); // 1 3 6 10
//   return accumulator + number;
// };

// const sumNumbers = collection.reduce(getSum);
// console.log(sumNumbers); // 15

// // Exemplo:
// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 100);
// console.log(bigger); // 85

// // Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// // Solução é está a seguir, mas tente realizar a função sem vê-la. Tente criar uma usando reduce e filter , e outra apenas usando reduce.

// // // Reduce e filter:
// // const evenNumbers = () => numbers.filter((element => element % 2 === 0)); // [18, 4, 76, 54]
// // const getSum = (result, number) => result + number
// // const evenNumbersReduce = evenNumbers().reduce(getSum);
// // console.log(evenNumbersReduce); // 152 (18 + 4 + 76 + 54)

// // Somente reduce:
// const getSum2 = (result, number) => number % 2 === 0 ? result + number : result;

// const evenNumbersReduce2 = (array) => array.reduce(getSum2, 0);
// console.log(evenNumbersReduce2(numbers));

// // Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!

// const estudantes = [
//   {
//     nome: 'Jorge',
//     sobrenome: 'Silva',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 67 },
//       { name: 'Português', nota: 79 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 65 },
//     ],
//   },
//   {
//     nome: 'Mario',
//     sobrenome: 'Ferreira',
//     idade: 15,
//     turno: 'Tarde',
//     materias: [
//       { name: 'Matemática', nota: 59 },
//       { name: 'Português', nota: 80 },
//       { name: 'Química', nota: 78 },
//       { name: 'Biologia', nota: 92 },
//     ],
//   },
//   {
//     nome: 'Jorge',
//     sobrenome: 'Santos',
//     idade: 15,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 76 },
//       { name: 'Português', nota: 90 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 80 },
//     ],
//   },
//   {
//     nome: 'Maria',
//     sobrenome: 'Silveira',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 91 },
//       { name: 'Português', nota: 85 },
//       { name: 'Química', nota: 92 },
//       { name: 'Biologia', nota: 90 },
//     ],
//   },
//   {
//     nome: 'Natalia',
//     sobrenome: 'Castro',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 70 },
//       { name: 'Português', nota: 70 },
//       { name: 'Química', nota: 60 },
//       { name: 'Biologia', nota: 50 },
//     ],
//   },
//   {
//     nome: 'Wilson',
//     sobrenome: 'Martins',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 80 },
//       { name: 'Português', nota: 82 },
//       { name: 'Química', nota: 79 },
//       { name: 'Biologia', nota: 75 },
//     ],
//   },
// ];

// // Resultado esperado:
// // [
// //   { name: 'Jorge', materia: 'Português' },
// //   { name: 'Mario', materia: 'Biologia' },
// //   { name: 'Jorge', materia: 'Português' },
// //   { name: 'Maria', materia: 'Química' },
// //   { name: 'Natalia', materia: 'Português' },
// //   { name: 'Wilson', materia: 'Português' },
// // ]

// const getBetterGrade = (result, materia) => {
//   if (result.nota > materia.nota) {
//     return result;
//   } else {
//     return materia;
//   }
// };

// const reportBetter = (student) =>
//   student.map((student) => ({
//     name: student.nome,
//     materia: student.materias.reduce(getBetterGrade).name, // não entendi essa linha (a utilização do reduce), peguei do gabarito do site.
//   }));

// console.log(reportBetter(estudantes));
