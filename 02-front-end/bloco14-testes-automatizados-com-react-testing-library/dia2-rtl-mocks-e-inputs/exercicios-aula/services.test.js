let { randomNumber, returnStrings, returnStrings2, returnStrings3 } = require('./services');

afterEach(() => {
  jest.clearAllMocks();
})

describe('Exercício 1 - Crie uma função randomNumber que chama número aleatório e faça os testes da função', () => {
  test('Testa a função randomNumber para chamar um número apenas uma vez', () => {
    randomNumber = jest.fn();

    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  })
  test('Testa a função randomNumber para que o resultado dela seja correto', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    expect(randomNumber()).toBe(10);
  })
})

describe('Exercício 2 - Com a mesma função do Exercício 1, utilize o mock e crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez', () => {
  it('Testa a função randomNumber para realizar a divisão', () => {
    randomNumber.mockImplementation((a, b) => a / b);

    randomNumber(50, 10);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(10, 5)).toBe(2);
    expect(randomNumber(5, 10)).toBe(0.5);
    expect(randomNumber(25, 5)).toBe(5);
    expect(randomNumber(-10, 10)).toBe(-1);
    expect(randomNumber(-52, -2)).toBe(26);
  })
})

describe('Exercício 3 - Com a mesma função do Exercício 1, utilize o mock e crie uma nova implementação, que deve receber três parâmetros e retornar a multiplicação deles. Resete a sua aplicação e crie uma nova, que receba apenas um parâmetro e retorne o dobro', () => {
  it('Testa a função randomNumber para realizar a multiplicação', () => {
    randomNumber.mockImplementation((a, b, c) => a * b * c);

    randomNumber(2, 2, 2);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(10, 5, 2)).toBe(100);
    expect(randomNumber(2, 2, 2)).toBe(8);
    expect(randomNumber(10, 50, 10)).toBe(5000);
    expect(randomNumber(7, -7, 7)).toBe(-343);
    expect(randomNumber(-5, -5, 5)).toBe(125);
  })

  it('Reseta a aplicação e faça uma nova implementação para trazer o dobro', () => {
    randomNumber.mockImplementation((a) => a * 2);

    randomNumber(1);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(1)).toBe(2);
    expect(randomNumber(2)).toBe(4);
    expect(randomNumber(-4)).toBe(-8);
    expect(randomNumber(123)).toBe(246);
    expect(randomNumber(1000)).toBe(2000);
  })
})

describe('Exercício 4 - Crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda recebe uma string e retorna apenas a primeira letra. A terceira recebe duas strings e concatena elas', () => {
  it('Testa a primeira função', () => {
    returnStrings = jest.fn().mockReturnValue('ABACAXI');

    returnStrings('Abacaxi');

    expect(returnStrings).toHaveBeenCalled();
    expect(returnStrings).toHaveBeenCalledTimes(1);
    expect(returnStrings('Abacaxi')).toBe('ABACAXI')
  })
  it('Testa a segunda função', () => {
    returnStrings2 = jest.fn().mockReturnValue('A');

    returnStrings2('Abacaxi');

    expect(returnStrings2).toHaveBeenCalled();
    expect(returnStrings2).toHaveBeenCalledTimes(1);
    expect(returnStrings2('Abacaxi')).toBe('A');

  })
  it('Testa a terceira função', () => {
    returnStrings3 = jest.fn().mockReturnValue('AbacaxiUva');

    returnStrings3('Abacaxi', 'Uva');

    expect(returnStrings3).toHaveBeenCalled();
    expect(returnStrings3).toHaveBeenCalledTimes(1);
    expect(returnStrings3('Abacaxi', 'Uva')).toBe('AbacaxiUva')
  })
  it('Mocka a primeira função e testa a nova funcionalidade', () => {
    returnStrings.mockImplementation((string) => string.toLowerCase());

    returnStrings('ABaCaxi');

    expect(returnStrings).toHaveBeenCalled();
    expect(returnStrings).toHaveBeenCalledTimes(1);
    expect(returnStrings('ABaCaxi')).toBe('abacaxi');
    expect(returnStrings('UVA')).toBe('uva');
    expect(returnStrings('Eu te amo demais')).toBe('eu te amo demais');
    expect(returnStrings('goTrybe')).toBe('gotrybe');
  })
  it('Mocka a segunda função e testa a nova funcionalidade', () => {
    returnStrings2.mockImplementation((string) => string.charAt(string.length - 1));

    returnStrings2('Abacaxi');

    expect(returnStrings2).toHaveBeenCalled();
    expect(returnStrings2).toHaveBeenCalledTimes(1);
    expect(returnStrings2('ABaCaxi')).toBe('i');
    expect(returnStrings2('UVA')).toBe('A');
    expect(returnStrings2('Eu te amo demais')).toBe('s');
    expect(returnStrings2('goTrybe')).toBe('e');
  })
  it('Mocka a terceira função e testa a nova funcionalidade. Restaura a primeira função e testa ela', () => {
    returnStrings3.mockImplementation((string1, string2, string3) => string1 + string2 + string3);

    returnStrings3('Abacaxi', 'Uva', 'Banana');

    expect(returnStrings3).toHaveBeenCalled();
    expect(returnStrings3).toHaveBeenCalledTimes(1);
    expect(returnStrings3('Abacaxi', 'Uva', 'Banana')).toBe('AbacaxiUvaBanana');
    expect(returnStrings3('Gabriel', 'loves', 'Jackson')).toBe('GabriellovesJackson');
    expect(returnStrings3('Anna', 'hates', 'Bacon')).toBe('AnnahatesBacon');
    expect(returnStrings3('I', 'love', 'LoL')).toBe('IloveLoL');

    returnStrings.mockImplementation((string) => string.toUpperCase());

    returnStrings('Abacaxi');

    expect(returnStrings).toHaveBeenCalled();
    expect(returnStrings).toHaveBeenCalledTimes(1);
    expect(returnStrings('Abacaxi')).toBe('ABACAXI');
    expect(returnStrings('Gabriel')).toBe('GABRIEL');
    expect(returnStrings('Anna')).toBe('ANNA');
    expect(returnStrings('League of Legends')).toBe('LEAGUE OF LEGENDS');
  })
})

// describe('Exercício 5 - Crie uma função que faça requisição para a API dog pictures (https://dog.ceo/dog-api/). Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success". A segunda deve interpretar que a requisição falhou e ter como valor "request failed"', () => {
//   it('', () => {

//   })
// })