// // Operações assíncronas

// setTimeout(() => {
//   console.log('Comprar parafusos'); // Comprar parafusos
//   console.log('Adicionar ao estoque'); // Adicionar ao estoque
// }, 2000);

// console.log('1 - Receber roda'); // 1 - Receber roda
// console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// // --

// // Outro exemplo:
// // Sem o setTimeout:
// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers); // [ 1, 2, 3 ]

// // Com o setTimeout:
// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers); // O retorno é [2, 3]
// // Por que o primeiro código retorna o array [1, 2, 3] enquanto o segundo retorna o array [2, 3] ? Isso ocorre por causa da função setTimeout . Ela é uma função assíncrona, que espera alguns milissegundos para executar a função passada a ela como parâmetro. No código acima, ela espera 3000 milissegundos (3 segundos) para executar o pushNumber(numbers, 1) . Como o console.log é uma função síncrona, ele é executado antes do setTimeout terminar.
// // Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos:
// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => console.log(numbers), 3000); // [ 2, 3, 1 ]
// // Observe que, além de adicionar o setTimeout , o array [1, 2, 3] foi modificado para [2, 3, 1] . Isso se dá, pois, como a função é assíncrona, o código continua rodando, mesmo que ela ainda não tenha terminado de executar. Ou seja, o array recebe primeiro o 2, depois o 3, e, após os 3 segundos do setTimeout, ele recebe o 1.

// // -----

// // Callbacks

// // Para fixar 1:
// // Exemplo:
// // Definição da função userFullName
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}.`;

// // Definição da função getUser
// const getUser = (param) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   // Retornamos nosso parâmetro, que será uma função (callback)
//   return param(userToReturn);
// };

// // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// console.log(getUser(userFullName)); // Hello! My name is Ivan Ivanovich.
// // Ou seja, o parâmetro "param" de dentro da nossa getUser é igual à função userFullName . Isso significa que, ao definirmos nossa função, o parâmetro é dinâmico, ele vai assumir o valor que passarmos no momento em que executarmos a nossa função.

// // 1 - Adicione uma callback como parâmetro da funcão getUser .
// // No código abaixo você tem a função getUser , que define um objeto com os dados de uma pessoa. Complete a função getUser de forma que ela receba uma função callback como parâmetro para realizar as operações abaixo:
//     // Insira o retorno da função getUser ;
//     // Complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
//     // Complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian".

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (param) => {
//   const userToReturn = {
//      firstName: "Ivan",
//      lastName: "Ivanovich",
//      nationality: "Russian"
//   };
//   // Insira o retorno da função `getUser`
//   return param(userToReturn);
// };

// console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
// console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

// // Para fixar 2:
// // 2 - Passe, como parâmetro e como retorno, uma callback para a função getUser.
// // No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa depois de um certo tempo. Complete a função getUser de forma que ela receba uma callback como parâmetro e a retorne para que possa realizar as operações abaixo sobre a pessoa:
//     // Insira uma callback como parâmetro da função getUser;
//     // Retorne a callback passada como parâmetro na função getUser;

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = (param) => {
//   setTimeout(() => {
//     const user = {
//       firstName: "Ivan",
//       lastName: "Ivanovich",
//       nationality: "Russian",
// };
//     // Retorne a `callback` passada como parâmetro na função `getUser`
//     // Dica: você pode manter o `console.log()`
//     console.log(param(user));
//     return param(user);
//   }, delay());
// };

// getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
// getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
// // Obs.: Analise o comportamento assíncrono da função getUser ao chamar getUser(userFullName) seguido de getUser(userNationality) . Tem hora que o nome da pessoa é impresso antes e tem hora que a nacionalidade da pessoa é impressa antes!

// // -----

// // Lidando com erros em operações assíncronas
// // 1 - Adicione uma callback e trate o erro retornado.
// // A função getCountry abaixo tem aproximadamente 50% de chance em obter, com sucesso, um país. Ela utiliza uma callback para poder realizar qualquer operação sobre o país retornado.
// // Adicione um segundo parâmetro, que deve ser uma callback, na função getCountry;
// // Retorne essa callback na função getCountry de forma que trate a mensagem de erro.

// const countryName = ({ name }) => console.log(`Returned country is ${name}`);
// const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

// const getCountry = (onSuccess, onError) => {
//   setTimeout(() => {
//     const didOperationSucceed = Math.random() >= 0.5;
//     if (didOperationSucceed) {
//       const country = {
//         name: 'Brazil',
//         hdi: 0.759,
//         currency: 'Real',
//       };
//       onSuccess(country);
//     } else {
//       const errorMessage = 'Country could not be found';
//       return onError(errorMessage);
//     }
//   }, delay());
// };

// // Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryName, printErrorMessage);

// // Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
// getCountry(countryCurrency, printErrorMessage);

// -----

// Testes assíncronos com Callbacks
