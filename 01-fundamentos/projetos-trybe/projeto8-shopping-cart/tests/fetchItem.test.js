require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem.', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('2.1 - Testa se fetchItem é uma função.', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  });
  it('2.2 - Testa se fetch é chamada utilizando a função fetchItem com o argumento "MLB1615760527".', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('2.3 - Testa se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint correto.', async () => {
    expect.assertions(1);
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('2.4 - Testa se o retorno da função fetchItem com o argumento "MLB1615760527" é igual ao objeto item.', async () => {
    expect.assertions(1);
    const teste = await fetchItem('MLB1615760527');
    expect(teste).toEqual(item);
  });
  it('2.5 - Testa se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url.".', async () => {
    expect.assertions(1);
    const errorMessage = await fetchItem();
    expect(errorMessage).toEqual(new Error('You must provide an url.'));
  });
});
