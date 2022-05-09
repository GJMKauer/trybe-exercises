const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function findEmployees({ name = 0, id = 0 }) {
  const filteredEmployee = employees.find(
    (element) =>
      element.id === `${id}`
      || `${name}`.includes(element.firstName)
      || `${name}`.includes(element.lastName),
  );
  // console.log(filteredEmployee)
  const rspAnimal = species.filter((animal) => filteredEmployee.responsibleFor.includes(animal.id));
  const responsibleAnimalNames = rspAnimal.map((element) => element.name);
  // console.log('Reponsible:', responsibleAnimal)
  const responsibleAnimalLocations = rspAnimal.map((element) => element.location);

  return {
    id: filteredEmployee.id,
    fullName: `${filteredEmployee.firstName} ${filteredEmployee.lastName}`,
    species: responsibleAnimalNames,
    locations: responsibleAnimalLocations,
  };
}
// console.log(findEmployees({id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad'}));

function allEmployees() {
  const nigel = findEmployees({ name: 'Nigel' });
  const burl = findEmployees({ name: 'Burl' });
  const ola = findEmployees({ name: 'Ola' });
  const wilburn = findEmployees({ name: 'Wilburn' });
  const stephanie = findEmployees({ name: 'Stephanie' });
  const sharonda = findEmployees({ name: 'Sharonda' });
  const ardith = findEmployees({ name: 'Ardith' });
  const emery = findEmployees({ name: 'Emery' });

  return [nigel, burl, ola, wilburn, stephanie, sharonda, ardith, emery];
}
// console.log(allEmployees());

// function employeeFalse() {
//   throw new Error('Informações inválidas');
// }

function getEmployeesCoverage(name, id) {
  // seu código aqui
  // if (!name || !id) {
  //   employeeFalse();
  // }
  if (name === undefined && id === undefined) {
    return allEmployees();
  }
  return findEmployees(name);
}
// getEmployeesCoverage({id: 'c1f50212-35a6-4ecd-8223-f835538526c2'});

module.exports = getEmployeesCoverage;
