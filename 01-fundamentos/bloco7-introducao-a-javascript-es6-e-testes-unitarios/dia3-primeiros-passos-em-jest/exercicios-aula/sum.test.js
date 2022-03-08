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

// const myFizzBuzz = require('./sum');

// describe('Exercício 3', () => {
//   it('A função retorna "fizzbuzz" quando o número é 15', () => {
//     expect(myFizzBuzz(15)).toBe('fizzbuzz');
//   });
//   it('A função retorna "fizz" quando o número é 9', () => {
//     expect(myFizzBuzz(9)).toBe('fizz');
//   });
//   it('A função retorna "buzz" quando o número é 10', () => {
//     expect(myFizzBuzz(10)).toBe('buzz');
//   });
//   it('A função retorna 4 quando o número é 4', () => {
//     expect(myFizzBuzz(4)).toBe(4);
//   });
//   it('A função retorna false quando o valor não é um número', () => {
//     expect(myFizzBuzz('q')).toBeFalsy();
//   });
// });

// const encode = require('./sum');

// describe('Exercício4.1', () => {
//   it('Existe uma função chamada "encode"', () => {
//     expect(typeof encode)).toBe('function'));
//   });
//   it('As vogais "a, e, i, o, u" são convertidas para "1, 2, 3, 4, 5", respectivamente', () => {
//     expect(encode('Trybe')).toBe('Tryb2');
//     expect(encode('Amorzinhu')).toBe('1m4rz3nh5');
//   });
//   it('Nenhuma letra de "Swrty" é convertida', () => {
//     expect(encode('Swrty')).toBe('Swrty');
//   });
//   it('O tamanho de "Eu amo a Trybe" é o mesmo após a conversão', () => {
//     expect(encode('Eu amo a Trybe')).toHaveLength(14);
//   });
// });

// const decode = require('./sum');

// describe('Exercício4.2', () => {
//   it('Existe uma função chamada "decode"', () => {
//     expect(typeof decode)).toBe('function'));
//   })
//   it('Os números "1, 2, 3, 4, 5" são convertidos para "a, e, i, o, u", respectivamente', () => {
//     expect(decode('Tryb2')).toBe('Trybe');
//     expect(decode('1m4rz3nh5')).toBe('amorzinhu');
//   });
//   it('Nenhuma letra de "Swrty" é convertida', () => {
//     expect(decode('Swrty')).toBe('Swrty');
//   });
//   it('O tamanho de "2u 1m4 1 Tryb2" é o mesmo após a desconversão', () => {
//     expect(decode('2u 1m4 1 Tryb2')).toHaveLength(14);
//   });
// });

const techList = require('./sum.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas',
      },
      {
        tech: 'HTML',
        name: 'Lucas',
      },
      {
        tech: 'JavaScript',
        name: 'Lucas',
      },
      {
        tech: 'Jest',
        name: 'Lucas',
      },
      {
        tech: 'React',
        name: 'Lucas',
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

module.exports = techList;
