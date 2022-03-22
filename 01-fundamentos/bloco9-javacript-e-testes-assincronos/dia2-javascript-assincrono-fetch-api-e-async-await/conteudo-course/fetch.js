// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// };

// fetchJoke();
// // Retorna: Promise { <pending> }, pois o fluxo assíncrono não foi controlado, então ele retorna o seu estado e não o dado requisitado.

// // --

// // Controlando o fluxo assíncrono:
// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// };

// fetchJoke();
// // Gera um elogio sobre o Chuck Norris. Exemplo: "Chuck Norris is the only human being to display the Heisenberg uncertainty principle - you can never know both exactly where and how quickly he will roundhouse-kick you in the face."

// // --

// // E se der erro em uma requisição? Aí entra o .catch():
// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// };

// fetchJoke();

// // Algo deu errado :(
// // TypeError: Only absolute URLs are supported
// // Obs: Faltou o "https://" no início do link.

// // --

// // Utilizando o async:
// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// };

// fetchJoke();

// // Gera um elogio sobre o Chuck Norris. Exemplo: "Chuck Norris can write multi-threaded applications with a single thread."

// // --

// // Utilizando o Await com o .then() e o .catch():
// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Algo deu errado :( \n${error}`);

//   console.log(result);
// };

// fetchJoke();

// // Gera um elogio sobre o Chuck Norris. Exemplo: "Chuck Norris can write multi-threaded applications with a single thread."

// // --

// Utilizando o Await com o try e catch:
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
};

fetchJoke();

// Gera um elogio sobre o Chuck Norris. Exemplo: "Chuck Norris can write multi-threaded applications with a single thread."
