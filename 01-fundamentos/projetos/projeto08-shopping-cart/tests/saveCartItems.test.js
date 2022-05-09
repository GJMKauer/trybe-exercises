const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems.', () => {
  // implemente seus testes aqui
  it('3.1 - Testa se, ao executar a função saveCartItems, o método localStorage.setItem é chamado.', () => {
    expect.assertions(1);
    saveCartItems();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('3.2 - Testa se, ao executar a função saveCartItems, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor a ser inserido no localStorage.', () => {
    expect.assertions(1);
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});
