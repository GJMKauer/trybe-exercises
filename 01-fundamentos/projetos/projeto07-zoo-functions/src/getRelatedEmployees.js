const data = require('../data/zoo_data');

const { employees } = data;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const emeryId = 'b0dc644a-5335-489b-8a2c-4e086c7819a2';

const managerIds = [stephanieId, olaId, burlId, emeryId];

function isManager(id) {
  // seu código aqui

  if (managerIds.includes(id)) {
    return true;
  }
  return false;
}
isManager('9e7d4524-363c-416a-8759-8aa7e50c0992');

function getRelatedEmployees(managerId) {
  // seu código aqui
  try {
    if (isManager(managerId) === false) {
      throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    }
  } catch (error) {
    throw error.message;
  }
  const filtered = employees.filter((employee) => employee.managers.includes(managerId));
  return [`${filtered[0].firstName} ${filtered[0].lastName}`,
    `${filtered[1].firstName} ${filtered[1].lastName}`,
    `${filtered[2].firstName} ${filtered[2].lastName}`];
}

console.log(getRelatedEmployees(stephanieId));

module.exports = { isManager, getRelatedEmployees };
