const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(productDetails('Alcool gel', 'Máscara')).toMatchObject([
      { name: 'Alcool gel', details: { productId: 'Alcool gel123' } },
      { name: 'Máscara', details: { productId: 'Máscara123' } },
    ]);
    expect(Object.keys(productDetails('Alcool gel', 'Máscara'))).toHaveLength(2);
    expect(typeof productDetails()[0]).toBe('object');
    expect(typeof productDetails()[1]).toBe('object');
    expect(productDetails('Alcool gel', 'Máscara')).not.toEqual(productDetails('Alcool gel', 'COVID'));
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toContain('123');
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toContain('123');
  });
});
