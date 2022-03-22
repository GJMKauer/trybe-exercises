const API_URL = `https://api.coincap.io/v2/assets`;

const getCoins = () => {
  fetch(API_URL)
    .then((moedas) => moedas.json())
    .then((moeda) => {
      const filteredCoins = moeda.data.filter((element) => element.rank <= 10);
      filteredCoins.forEach((element, index) => {
        const coin = `${filteredCoins[index].id} (${filteredCoins[index].symbol}): U$${parseFloat(filteredCoins[index].priceUsd).toFixed(2)}.`;
        const liList = document.createElement('li');
        liList.innerText = coin;
        const ulList = document.querySelector('#listOfCriptos');
        ulList.appendChild(liList);
      });
    })
    .catch((error) => console.log(error));
};
getCoins();
