// Exercício 1

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      const jokeContainer = document.querySelector('#jokeContainer');
      jokeContainer.innerText = data.joke;
    });
};
// fetchJoke();
window.onload = () => fetchJoke();
