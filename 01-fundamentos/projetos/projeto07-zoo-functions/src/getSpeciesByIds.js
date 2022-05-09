const data = require('../data/zoo_data');
// console.log(data)
// console.log('Espécies Aqui:', species);
// console.log('Teste Id:', species.name)
// console.log('Teste 2:', data.species[0])
// console.log('Teste Id:', data.filter((a) => a.id === '0938aa23-f153-4937-9f88-4858b24d6bce'))
// console.log(data.lionId)
const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) {
    return [];
  }
  return species.filter(
    (animal) => animal.id === ids[0] || animal.id === ids[1],
  );
}
console.log(
  getSpeciesByIds(
    '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
    '0938aa23-f153-4937-9f88-4858b24d6bce',
  ),
);

module.exports = getSpeciesByIds;
