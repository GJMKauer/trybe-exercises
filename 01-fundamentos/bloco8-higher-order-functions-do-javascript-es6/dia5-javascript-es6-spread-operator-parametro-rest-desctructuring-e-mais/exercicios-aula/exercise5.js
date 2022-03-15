// 5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring .

const myList = [1, 2, 3];
const [element3, element2, element1] = myList; // Para a minha resolução, tive que inserir essa linha. Faz mais sentido para mim.

// escreva swap abaixo
const swap = (list) => [element1, element2, element3];
console.log(swap(myList));

// // Ou, conforme o gabarito:
// const swap = ([a, b, c]) => [c, b, a];
// console.log(swap(myList));
