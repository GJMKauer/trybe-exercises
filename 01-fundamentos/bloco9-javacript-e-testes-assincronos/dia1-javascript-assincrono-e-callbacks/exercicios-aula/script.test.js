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

// // --

// // Teste Exercício 9: A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Complete os testes para a função getPokemonDetails de acordo com as especificações.
// // Verifique se a importação do arquivo correto está sendo feita.
// const { getPokemonDetails } = require('../exercicios-aula/script');

// describe('A função getPokemonDetails', () => {
//   it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
//     const expectedError = new Error('Não temos esse pokémon para você :(');

//     function callback(error, result) {
//       expect(error).toEqual(expectedError);
//       done();
//     }

//     getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
//   });

//   it('retorna um pokemon que existe no banco de dados', (done) => {
//     // Escreva aqui seu código
//     const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember.';

//     function callback(error, result) {
//       expect(result).toBe(expectedString);
//       done();
//     }

//     getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
//   });
// });

// // --

// // Teste Exercício 10: Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach.
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });

// // 1 - beforeEach
// // 1 - test
// // 1 - afterEach
// // 1 - beforeEach
// // 2 - beforeEach
// // 2 - test
// // 2 - afterEach
// // 1 - afterEach