const fetchProducts = async (element) => {
  if (!element) {
    return new Error('You must provide an url.');
  }
  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${element}`;

  const result = await fetch(API_URL);
  const response = await result.json();
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
