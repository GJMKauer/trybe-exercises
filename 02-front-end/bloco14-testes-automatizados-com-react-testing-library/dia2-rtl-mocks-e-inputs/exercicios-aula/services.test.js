let randomNumber = require('./services');

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
  test('Testa a função randomNumber para realizar a divisão', () => {
    fail('Teste vazio!')
  })
})

describe('Exercício 3 - Com a mesma função do Exercício 1, utilize o mock e crie uma nova implementação, que deve receber três parâmetros e retornar a multiplicação deles. Resete a sua aplicação e crie uma nova, que receba apenas um parâmetro e retorne o dobro', () => {
  test('Testa a função randomNumber para realizar a multiplicação', () => {
    fail('Teste vazio!')
  })
})

describe('Exercício 4 - Crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda recebe uma string e retorna apenas a primeira letra. A terceira recebe duas strings e concatena elas', () => {
  test('', () => {
    fail('Teste vazio!')
  })
})

describe('Exercício 4.1 - Faça o mock das funções para os seguintes casos: A primeira função agora deve retornar a string em caixa baixa. A segunda função deve retornar a última letra da string. A terceira função deve receber três strings e concatenar elas. Restaure a implementação da PRIMEIRA função e teste se ela foi restaurada', () => {
  test('', () => {
    fail('Teste vazio!')
  })
})

describe('Exercício 5 - Crie uma função que faça requisição para a API dog pictures (https://dog.ceo/dog-api/). Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success". A segunda deve interpretar que a requisição falhou e ter como valor "request failed"', () => {
  test('', () => {
    fail('Teste vazio!')
  })
})