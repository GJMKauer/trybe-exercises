const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const filteredBySpecie = species.map((specie) => ({ [specie.name]: specie.residents.length }));
    const filteredBySpecieAssign = Object.assign({}, ...filteredBySpecie);
    // Utilizei o Object.assign conforme o exemplo no site: https://bit.ly/35Z0wKT.
    // Estava tentando somente com o map, mas ele retorna um ARRAY (e preciso retornar um OBJETO).
    // Não me sinto confortável utilizando o .reduce, então achei essa uma alternativa melhor.
    return filteredBySpecieAssign;
  }
  if (animal.sex) {
    const filteredAll = species.find((nome) => nome.name === animal.specie);
    const { residents } = filteredAll;

    const filteredBySex = residents.filter((gender) => gender.sex === animal.sex);
    return filteredBySex.length;
  }
  const filteredAll = species.find((nome) => nome.name === animal.specie);
  return filteredAll.residents.length;
}

console.log(countAnimals());

module.exports = countAnimals;
