const data = require('../data/zoo_data');

const { species } = data;
// // const { species: { residents: residentName }} = data;
// // console.log(residentName)
// // console.log(species[0].residents.every((idade) => idade.age >= 7)) // Funcional, apenas um elemento
// // console.log(species[0].name === 'a' ? 2 : 3)
// console.log(species[0].name === 'lions' ? species[0].residents.every((idade) => idade.age >= 7) : false)
// console.log(species.every((element) => element.name === 'lions' ? element.residents.age >= 0 : 5))
// console.log(species.residents.every((idade) => idade.age >= 7))
// console.log(species.forEach.residents.forEach((element) => console.log(element.age)))
// // .every((idade) => idade >= 1))

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  if (species[4].name === animal) {
    return species[4].residents.every((idade) => idade.age >= age);
  }
  return false;
}
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
