// Teste Exercício 7
// const { uppercase } = require('../exercicios-aula/script');

// it('testa a palavra "test" para ser igual a "TEST"', (done) => {
//   uppercase('test', (str) => {
//     try {
//       expect(str).toBe('TEST');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

// --

// Teste Exercício 9: A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Complete os testes para a função getPokemonDetails de acordo com as especificações.
// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('../exercicios-aula/script');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error, result) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember.';

    function callback(error, result) {
      expect(result).toBe(expectedString);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});
