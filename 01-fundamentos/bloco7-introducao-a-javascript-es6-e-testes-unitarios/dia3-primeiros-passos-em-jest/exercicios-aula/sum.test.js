// const sum = require('./sum');

// describe('Exercício 1', () => {
//   it('A soma dos valores 4 e 5 é 9', () => {
//     expect(sum(4, 5)).toBe(9);
//   });
//   it('A soma dos valores 0 e 0 é 0', () => {
//     expect(sum(0, 0)).toBe(0);
//   });
//   it('A função lança um erro quando os parâmetros são 4 e "5"', () => {
//     expect(() => sum(4, '5')).toThrow();
//   });
//   it('A função lança a mensagem de erro "parameters must be numbers" quando os parâmetros são 4 e "5"', () => {
//     expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
//   });
// });

// const myRemove = require('./sum');

// describe('Exercício 2', () => {
//   const array = [1, 2, 3, 4];
//   it('Quando o array for [1, 2, 3, 4] e item for 3, retorna o array [1, 2, 4]', () => {
//     expect(myRemove(array, 3)).toEqual([1, 2, 4]);
//   });
//   it('Quando o array for [1, 2, 3, 4] e item for 3, não retornar o array [1, 2, 3, 4]', () => {
//     expect(myRemove(array, 3)).not.toEqual(array);
//   });
//   it('Quando o array for [1, 2, 3, 4] e item for 5, retorna o array [1, 2, 3, 4]', () => {
//     expect(myRemove(array, 5)).toEqual(array);
//   });
// });

const myFizzBuzz = require('./sum');

describe('Exercício 3', () => {
  it('A função retorna "fizzbuzz" quando o número é 15', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('A função retorna "fizz" quando o número é 9', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('A função retorna "buzz" quando o número é 10', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('A função retorna 4 quando o número é 4', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });
  it('A função retorna false quando o valor não é um número', () => {
    expect(myFizzBuzz('q')).toBeFalsy();
  });
});
