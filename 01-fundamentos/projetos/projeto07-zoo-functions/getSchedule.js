const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

function getSpecificDay(dayName) {
  if (dayName === 'Monday') {
    return {
      [dayName]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  const day = {
    [dayName]: {
      officeHour: `Open from ${hours[dayName].open}am until ${hours[dayName].close}pm`, // Descobri sobre optional chaining depois de quebrar muito a cabeça com os testes. No console.log estava dando o retorno correto, mas no npm test não estava dando certo de jeito nenhum. Isso estava acontecendo desde ontem no requisito 9, que tive que refatorar quase inteiro para passar no teste. Hoje, finalmente consegui encontrar um link que falasse sobre esse erro e como resolver. Descobri pelo Stack Overflow aqui: https://stackoverflow.com/questions/14782232/how-to-avoid-cannot-read-property-of-undefined-errors e li a documentação aqui: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining para utilizar nas funções.
      // Obs 2: Retirei o optional chaining porque o Lint estava dando Parsing error. Acabou que o requisito funcionou mesmo sem ele.
    },
  };
  const filteredDay = species.filter((element) => element.availability.includes(dayName));
  const filteredAnimalsOfDay = filteredDay.map((element) => element.name);
  day[dayName].exhibition = filteredAnimalsOfDay;
  return day;
}
getSpecificDay('Tuesday');

function getSpecificAnimal(animalName) {
  const filteredAnimal = species.find((element) => element.name === animalName);
  const filteredAnimalDays = filteredAnimal.availability;
  return filteredAnimalDays;
}
getSpecificAnimal('penguins');

const tuesday = getSpecificDay('Tuesday');
const wednesday = getSpecificDay('Wednesday');
const thursday = getSpecificDay('Thursday');
const friday = getSpecificDay('Friday');
const saturday = getSpecificDay('Saturday');
const sunday = getSpecificDay('Sunday');

const agenda = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: tuesday.Tuesday.exhibition,
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: wednesday.Wednesday.exhibition,
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: thursday.Thursday.exhibition,
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: friday.Friday.exhibition,
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: saturday.Saturday.exhibition,
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: sunday.Sunday.exhibition,
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function getSchedule(scheduleTarget) {
  const validAnimals = species.map((element) => element.name);
  const validDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  if (validAnimals.includes(scheduleTarget)) {
    return getSpecificAnimal(scheduleTarget);
  }
  if (validDays.includes(scheduleTarget)) {
    return getSpecificDay(scheduleTarget);
  }
  return agenda;
}
getSchedule();

module.exports = getSchedule;
