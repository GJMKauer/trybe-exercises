// Diferença da utilização de loop for para forEach

// // Com loop for:
// const students = [
//   { name: 'Maria', grade: 70, approved: '' },
//   { name: 'José', grade: 56, approved: '' },
//   { name: 'Roberto', grade: 90, approved: '' },
//   { name: 'Ana', grade: 81, approved: '' },
// ];

// function verifyGrades() {
//   for (let i = 0; i < students.length; i += 1) {
//     const student = students[i];
//     if (student.grade >= 60) {
//       student.approved = 'Aprovado';
//     } else {
//       student.approved = 'Recuperação';
//     }
//   }
// }

// verifyGrades();

// console.log(students);
// // [
// //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
// //   { name: 'José', grade: 56, approved: 'Recuperação' },
// //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
// //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// // ]

// // --
// // Com forEach:
// const students = [
//   { name: 'Maria', grade: 70, approved: '' },
//   { name: 'José', grade: 56, approved: '' },
//   { name: 'Roberto', grade: 90, approved: '' },
//   { name: 'Ana', grade: 81, approved: '' },
// ];

// function verifyGrades() {
//   students.forEach((student, index) => {
//     if (student.grade >= 60) {
//       students[index].approved = 'Aprovado';
//     } else {
//       students[index].approved = 'Recuperação';
//     }
//   });
// }

// verifyGrades();

// console.log(students);
// // [
// //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
// //   { name: 'José', grade: 56, approved: 'Recuperação' },
// //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
// //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// // ]

// Diferença de utilização de condicional if/else para Array e Array.find

// // Com if/else:
// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// let firstMultipleOf5;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 5 === 0) {
//     firstMultipleOf5 = numbers[index];
//     break;
//   }
// }

// console.log(firstMultipleOf5);
// // 50

// // --
// // Com Array.find:
// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

// console.log(firstMultipleOf5);
// // 50

// -----

// // Para Fixar - Array.forEach
// // 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
// };

// // Adicione seu código aqui
// emailListInData.forEach(showEmailList);

// // Para Fixar - Array.find
// // 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

// const verify3And5 = numbers.find(findDivisibleBy3And5);

// console.log(verify3And5);

// // 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (name) => name.length === 5;

// const verifyIs5 = names.find(findNameWithFiveLetters);

// console.log(verifyIs5);

// // 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ];

// const findMusic = (id) => {
//   return musicas.find((musica) => musica.id === id);
// }

// console.log(findMusic('31031685'));

// // Array.some e Array.every
// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false

// const grades = {
//   portugues: 'Aprovado',
//   matematica: 'Reprovado',
//   ingles: 'Aprovado',
// };

// const verifyGrades = (studentGrades) => Object.values(studentGrades).every((grade) => grade === 'Aprovado');

// console.log(verifyGrades(grades)); // false (não foi aprovado em todas as matérias)

// // Para Fixar - Array.some e Array.every
// // 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false. Use Array.some;
// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((newName) => newName === name);
// };
// console.log(hasName(names, 'Ana'));

// // 2- Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false. Use Array.every;
// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   return arr.every((person) => person.age >= minimumAge);
// };

// console.log(verifyAges(people, 18));
