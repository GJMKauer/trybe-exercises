// Parte 1 - var, let e const

// // O uso de let permite que a variável não "vaze" para foca do escopo.
// function userInfo() {
//     let userEmail = 'maria@email.com';

//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//     console.log(userEmail);
//   }
//   userInfo();

// --

// if (true) {
//     // inicio do escopo do if
//     var userAge = '20';
//     console.log(userAge); // 20
//     // fim do escopo do if
//   }
//   console.log(userAge); // 20

// --

// const favoriteLanguage = 'Javascript';
// favoriteLanguage = 'Python';
// console.log(favoriteLanguage); // Erro

// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';
// console.log(favoriteTechnology); // Facial recognition

// --

// const userInfo = {
//   name: "Cláudio",
//   id: "5489-2",
//   email: "claudio@email.com",
// };

// userInfo.name = "João";

// console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

// --

// const technologies = ["Javascript", "CSS", "HTML"];
// technologies.push("React");
// console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ["Javascript", "CSS", "HTML", "React"];
// console.log(technologies); // Erro

// --

// Parte 2 - Template literals

// // Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// Parte 3 - Arrow functions

// // Função tradicional
// const printName = function () {
//   const myName = "Lucas";
//   return myName;
// };

// console.log(printName());

// // Transformando em arrow function
// const printName = () => {
//   const myName = 'Lucas';
//   return myName;
// };

// console.log(printName());

// // Return omitido
// const printName = () => 'Lucas';
// console.log(printName());

// // Podemos omitir os parênteses caso tenhamos APENAS UM parâmetro.
// const multiplyByTwo = number => number * 2;
// console.log(multiplyByTwo(10));

// // Os parênteses não são omitidos em funções com mais de um parâmetro.
// const multiplication = (number, multi) => number * multi;
// console.log(multiplication(8, 2));

