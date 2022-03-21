const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find( // Tinha utilizado .filter, mas ele retorna um ARRAY e não um OBJETO.
    (name) => name.firstName === employeeName || name.lastName === employeeName,
  );
}
console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
