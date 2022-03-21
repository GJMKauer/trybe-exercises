const { uppercase } = require('../exercicios-aula/script');

it('testa a palavra "test" para ser igual a "TEST"', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});
