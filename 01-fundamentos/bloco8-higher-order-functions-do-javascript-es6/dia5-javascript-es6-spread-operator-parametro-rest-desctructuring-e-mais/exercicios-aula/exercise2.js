// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

// escreva sum abaixo
const sumAll = (...numbers) => {
  let sum = 0;
  numbers.forEach((element) => sum += element)
  return sum;
}
console.log(sumAll(1, 5, 7, 10, 25));