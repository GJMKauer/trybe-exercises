const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((element) => element.id === id);
  const speciesObject = species.find(
    (element) => element.id === employee.responsibleFor[0],
  );
  const specieSorted = speciesObject.residents.sort((a, b) => b.age - a.age);
  return [
    specieSorted[0].name,
    specieSorted[0].sex,
    specieSorted[0].age,
  ];
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
