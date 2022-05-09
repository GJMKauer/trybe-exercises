const data = require('../data/zoo_data');

const { prices } = data;
console.log(prices);
console.log(prices.adult);

const customers = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  // seu código aqui
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  return {
    child,
    adult,
    senior,
  };
}
console.log(countEntrants(customers));

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
  // Abaixo: havia esquecido como verificar se um objeto é vazio. Estava utilizando "entrants === {}"
  // Verifiquei pelo link abaixo: https://bobbyhadz.com/blog/javascript-check-if-object-is-empty
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const customersF = countEntrants(entrants);
  const sum = prices.child * customersF.child
    + prices.adult * customersF.adult
    + prices.senior * customersF.senior;
  return sum;
}
console.log(calculateEntry(customers));

module.exports = { calculateEntry, countEntrants };
