// // Utilizando o Array.filter

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.filter(verifyEven);

// console.log(isEven); // [ 30, 22 ]

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.filter((number) => number % 2 === 0);

// console.log(isEven2); // [ 30, 22 ]

// // --
// // Olhe este outro exemplo de apenas pegar os elementos que não possuem alguma condição. Neste caso, deseja-se apenas as pessoas que não possuem ainda idade para dirigir:
// const objPeople = [
//   { name: 'José', age: 21 },
//   { name: 'Lucas', age: 19 },
//   { name: 'Maria', age: 16 },
//   { name: 'Gilberto', age: 18 },
//   { name: 'Vitor', age: 15 },
// ];

// const verifyAgeDrive = (arrayOfPeople) => arrayOfPeople.filter((people) => people.age < 18);

// console.log(verifyAgeDrive(objPeople));
// // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

// // --
// // Outra forma de se usar o filter é retornar um array sem o elemento desejado. É preciso remover o Ricardo do objeto agora, já que ele não é mais um estudante.
// const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const removeStudentByName = (name, listStudents) => listStudents.filter((student) => student !== name);
// // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

// const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
// console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
// // Observe que o filter foi usado dentro de uma função que recebe dois parâmetros, o array de valores e uma string, o que será removido. A condição de dentro do filter é para retornar sempre que o elemento for diferente do name passado.

// // ------------------------------

// // Utilizando o Array.map
// // Com o For:
// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const fullNames = [];

// for (let index = 0; index < persons.length; index += 1) {
//   fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
// }

// console.log(fullNames);

// // Com o Array.map:
// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

// console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// // --
// // Transformar números em números negativos:
// // Com o Array.map:
// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.map((number) => (number > 0 ? number * -1 : number));

// console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// // Com o For:
// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = [];
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > 0) {
//     negativeNumbers.push(numbers[index] * -1);
//   } else {
//     negativeNumbers.push(numbers[index]);
//   }
// }

// console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// // --
// // Podemos utilizar o .map para juntar dois arrays e criar um novo a partir deles.
// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];
// // Devemos juntá-los para que fiquem como o exemplo:
// // const listProducts = [{ Arroz: 2.99 },...]

// const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => ({ [product]: listPrices[index] }));

// const listProducts = updateProducts(products, prices);
// console.log(listProducts);
// // [
// //   { Arroz: 2.99 },
// //   { Feijao: 3.99 },
// //   { Alface: 1.5 },
// //   { Tomate: 2 },
// // ]

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
//       { name: 'Matemática', nota: '59' },
//       { name: 'Português', nota: '80' },
//       { name: 'Química', nota: '78' },
//       { name: 'Biologia', nota: '92' },
//     ],
//   },
//   {
//     nome: 'Jorge',
//     sobrenome: 'Santos',
//     idade: 15,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: '76' },
//       { name: 'Português', nota: '90' },
//       { name: 'Química', nota: '70' },
//       { name: 'Biologia', nota: '80' },
//     ],
//   },
//   {
//     nome: 'Maria',
//     sobrenome: 'Silveira',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: '91' },
//       { name: 'Português', nota: '85' },
//       { name: 'Química', nota: '92' },
//       { name: 'Biologia', nota: '90' },
//     ],
//   },
//   {
//     nome: 'Natalia',
//     sobrenome: 'Castro',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: '70' },
//       { name: 'Português', nota: '70' },
//       { name: 'Química', nota: '60' },
//       { name: 'Biologia', nota: '50' },
//     ],
//   },
//   {
//     nome: 'Wilson',
//     sobrenome: 'Martins',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: '80' },
//       { name: 'Português', nota: '82' },
//       { name: 'Química', nota: '79' },
//       { name: 'Biologia', nota: '75' },
//     ],
//   },
// ];

// const reportStatus = (name, students) => {
//   const studentInfo = students.find((student) => student.nome === name);
//   return studentInfo.materias.map((materia) => `${materia.name}: ${materia.nota >= 60 ? 'Aprovado(a)' : 'Reprovado(a)'}`);
// };

// console.log(reportStatus('Natalia', estudantes));
