// const sum = (a, b) => {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }
//   return a + b;
// };

// module.exports = sum;

// const myRemove = (arr, item) => {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// module.exports = myRemove;

// const myFizzBuzz = (num) => {
//   if (typeof num !== 'number') {
//     return false;
//   }
//   if (num % 3 === 0 && num % 5 === 0) {
//     return 'fizzbuzz';
//   }
//   if (num % 3 === 0) {
//     return 'fizz';
//   }
//   if (num % 5 === 0) {
//     return 'buzz';
//   }
//   return num;
// };

// module.exports = myFizzBuzz;

// const encode = (stringVowels) => {
//   let stringVowelsSplit = stringVowels.split('');
//   for (let index in stringVowelsSplit) {
//     if (stringVowelsSplit[index] === 'a' || stringVowelsSplit[index] === 'A') {
//       stringVowelsSplit[index] = 1;
//     }
//     if (stringVowelsSplit[index] === 'e' || stringVowelsSplit[index] === 'E') {
//       stringVowelsSplit[index] = 2;
//     }
//     if (stringVowelsSplit[index] === 'i' || stringVowelsSplit[index] === 'I') {
//       stringVowelsSplit[index] = 3;
//     }
//     if (stringVowelsSplit[index] === 'o' || stringVowelsSplit[index] === 'O') {
//       stringVowelsSplit[index] = 4;
//     }
//     if (stringVowelsSplit[index] === 'u' || stringVowelsSplit[index] === 'U') {
//       stringVowelsSplit[index] = 5;
//     }
//   }
//   return stringVowelsSplit.join('');
// }
// module.exports = encode;

// const decode = (stringNumbers) => {
//   let stringNumbersSplit = stringNumbers.split('');
//   console.log(stringNumbersSplit);

//   for (let index in stringNumbersSplit) {
//     if (stringNumbersSplit[index] === '1') {
//       stringNumbersSplit[index] = 'a';
//     }
//     if (stringNumbersSplit[index] === '2') {
//       stringNumbersSplit[index] = 'e';
//     }
//     if (stringNumbersSplit[index] === '3') {
//       stringNumbersSplit[index] = 'i';
//     }
//     if (stringNumbersSplit[index] === '4') {
//       stringNumbersSplit[index] = 'o';
//     }
//     if (stringNumbersSplit[index] === '5') {
//       stringNumbersSplit[index] = 'u';
//     }
//   }
//   return stringNumbersSplit.join('');
// };

// module.exports = decode;

// const techList = (arrayLista, name) => {
//   const objetosListaOrdenado = arrayLista.sort();
//   const objetosLista = [];

//   for (let index = 0; index < objetosListaOrdenado.length; index += 1) {
//     objetosLista.push({
//       tech: objetosListaOrdenado[index],
//       name,
//     });
//   }

//   if (objetosLista.length === 0) {
//     return 'Vazio!';
//   }
//   return objetosLista;
// };

// module.exports = techList;

const hydrate = (string) => {
  const stringDividida = string.split('');
  let quantidade = 0;

  for (let i = 0; i < stringDividida.length; i += 1) {
    const parsedCharacter = parseInt(stringDividida[i]);
    if (parsedCharacter) {
      quantidade += parsedCharacter;
    }
  }

  let copo = 'copo';

  if (quantidade > 1) {
    copo = 'copos';
  }
  return `${quantidade} ${copo} de água`;
};

module.exports = hydrate;
