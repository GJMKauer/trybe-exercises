const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems.', () => {
  // implemente seus testes aqui
  it('4.1 - Testa se, ao executar a função getSavedCartItems, o método localStorage.getItem é chamado.', () => {
    // expect.assertions(1);
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('4.2 - Testa se, ao executar a função getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', () => {
    // expect.assertions(1);
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
