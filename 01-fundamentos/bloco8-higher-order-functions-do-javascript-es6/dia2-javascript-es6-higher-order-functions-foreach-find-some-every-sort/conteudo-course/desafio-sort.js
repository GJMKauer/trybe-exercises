const estudantes = [
  {
    nome: 'Joel',
    Projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Mica',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Hugonardo',
    Projeto: 'Trybewarts',
    status: 97,
  },
  {
    nome: 'Aninha',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Joicy',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Ronald',
    Projeto: 'Trybewarts',
    status: 75,
  },
];

// 1 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados por status.
// escreva sua função aqui.
console.log(estudantes.sort((a, b) => a.status - b.status)); // OK.

// 2 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados em ordem alfabetica dos nomes das pessoas estudantes.
// escreva sua função aqui.

// If/Else tradicional
// // items.sort(function(a, b) {
// //   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
// //   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
// //   if (nameA < nameB) {
// //     return -1;
// //   }
// //   if (nameA > nameB) {
// //     return 1;
// //   }

// //   // names must be equal
// //   return 0;
// // });
// Documentação pelo https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


// Operador Ternário
// // rutas.sort(function (a, b) {
// //   return a.nome > b.nome ? 1 : a.nome < b.nome ? -1 : 0;
// // });
// Solução pelo https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/#:~:text=Caso%20voc%C3%AA%20tenha%20um%20array,usar%20o%20m%C3%A9todo%20sort().&text=return%20(a.,nome%20%3E%20b. 

const ordenaPorNome = (a, b) => a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;

console.log(estudantes.sort(ordenaPorNome)) // OK.

// Respostas trabalhas em conjunto por:
// Gabriel Kauer - Turma 20 - Tribo A
// Vitor Bastos - Turma 20 - Tribo A
// Gabriel Alexander - Turma 20 - Tribo A
// Renato Gonçalves - Turma 20 - Tribo A