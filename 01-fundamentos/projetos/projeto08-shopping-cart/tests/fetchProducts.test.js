require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts.', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('1.1 - Testa se fetchProducts é uma função.', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });
  it('1.2 - Testa se fetch é chamada utilizando a função fetchProducts com o argumento computador.', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('1.3 - Testa se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint correto.', async () => {
    expect.assertions(1);
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('1.4 - Testa se o retorno da função fetchProducts com o argumento "computador" é igual ao objeto computadorSearch.', async () => {
    expect.assertions(1);
    const teste = await fetchProducts('computador');
    expect(teste).toEqual(computadorSearch);
  });
  it('1.5 - Testa se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url.".', async () => {
    expect.assertions(1);
    const errorMessage = await fetchProducts();
    expect(errorMessage).toEqual(new Error('You must provide an url.'));
  });
});
