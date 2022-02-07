// ----- SyntaxError

// let diasDaSemana = {
//   1: "domingo",
//   2: "segunda",
//   3: "terça",
//   4: "quarta",
//   5: "quinta",
//   6: "sexta",
//   7: "sábado",
// };

// diasDaSemana.1; // SyntaxError: Unexpected number
// console.log(diasDaSemana["1"]); // domingo

// ----- Formas de acessar os valores das chaves

// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };

//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank

//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000

//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

//   ----- Encapsular diversos objetos

// let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//       nome: 'Jake',
//       sobrenome: 'Peralta',
//       endereco: {
//         rua: 'Smith Street',
//         bairro: 'Brooklyn',
//         cidade: 'Nova Iorque',
//         estado: 'Nova Iorque',
//       },
//     },
//   };

//   console.log(usuario['id']); // 99
//   console.log(usuario.email); // jakeperalta@gmail.com

//   console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//   console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

// ----- Acessar as propriedades de um objeto que está em um array

// let moradores = [
//   {
//     nome: "Luiza",
//     sobrenome: "Guimarães",
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: "William",
//     sobrenome: "Albuquerque",
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: "Murilo",
//     sobrenome: "Ferraz",
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: "Zoey",
//     sobrenome: "Brooks",
//     andar: 1,
//     apartamento: 101,
//   },
// ];

// let primeiroMorador = moradores[0];
// console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
// console.log(primeiroMorador["andar"]); // 10

// let ultimoMorador = moradores[moradores.length - 1];
// console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
// console.log(ultimoMorador.nome); // Zoey

// ------------------------------

// For/in dentro de objetos e arrays.

//pedidos de pizza

// let pizzas = {
//   sabor: "Palmito",
//   preco: 39.9,
//   bordaCatupiry: true,
// };

// for (let key in pizzas) {
//   console.log(key);
// }
// for (let key in pizzas) {
//   console.log(pizzas);
// }
// for (let key in pizzas) {
//   console.log(pizzas.preco);
// }
// for (let key in pizzas) {
//   console.log(pizzas["bordaCatupiry"]);
// }
// for (let key in pizzas) {
//   console.log(pizzas[key]);
// }

// -----

// let pizzasDoces = ["chocolate", "banana", "morango"];

// for (let key in pizzasDoces) {
//   console.log(key);
// }
// for (let key in pizzasDoces) {
//   console.log(pizzasDoces);
// }
// for (let key in pizzasDoces) {
//   console.log(pizzasDoces[key]);
// }
// for (let key in pizzasDoces) {
//   console.log(key, pizzasDoces[key]);
// }

//marcas de carros

// let cars = ["Saab", "Volvo", "BMW"];

// for (let index in cars) {
//   console.log(cars[index]);
// }

//

// let car = {
//   type: "Fiat",
//   model: "500",
//   color: "white",
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }


// For/of percorre os elementos dos objetos, e não os índices.

// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };
//resultado: hamburguer, bife, acarajé;