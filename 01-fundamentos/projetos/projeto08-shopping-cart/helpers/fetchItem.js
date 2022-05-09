const fetchItem = async (elementID) => {
  if (!elementID) {
    return new Error('You must provide an url.');
  }
  const API_URL = `https://api.mercadolibre.com/items/${elementID}`;

  const result = await fetch(API_URL);
  const response = await result.json();
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
