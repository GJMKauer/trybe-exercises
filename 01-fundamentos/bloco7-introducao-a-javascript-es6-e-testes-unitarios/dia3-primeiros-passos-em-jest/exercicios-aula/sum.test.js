const sum = require('./sum');

describe('Exercício 1', () => {
  it('A soma dos valores 4 e 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('A soma dos valores 0 e 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('A função lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  it('A função lança a mensagem de erro "parameters must be numbers" quando os parâmetros são 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});
