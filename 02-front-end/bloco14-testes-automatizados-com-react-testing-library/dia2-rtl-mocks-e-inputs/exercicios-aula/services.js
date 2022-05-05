const randomNumber = () => Math.floor(Math.random() * 100);

const returnStrings = (string) => string.toUpperCase();
// console.log(returnStrings('Abacaxi'));

const returnStrings2 = (string) => string.charAt(0)
// console.log(returnStrings2('Abacaxi'));

const returnStrings3 = (string1, string2) => string1 + string2;
// console.log(returnStrings3('Abacaxi', 'Uva'))

module.exports = { randomNumber, returnStrings, returnStrings2, returnStrings3 };
