// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = ['Aanemarie', 'Adervandes', 'Akifusa', 'Abegildo', 'Adicellia', 'Aladonata', 'Abeladerco', 'Adieidy', 'Alarucha'];

const expectedResult = 20;

function containsA() {
  // escreva seu código aqui
  // tem que usar o .reduce
  let count = 0;
  let result = names
    .join('')
    .split('')
    .reduce((acc, curr) => { // Não entendi por quê eu não precisei utilizar o acc nessa função. (e nem os valores que ele está recebendo)
      if (curr === 'a' || curr === 'A') {
        count += 1;
      }
      return count;
    }, 0);
  return result;
}
console.log(containsA());
