export async function getCategories() {
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endPoint);
  const dataCategories = await response.json();
  return dataCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let endPoint;
  if (categoryId && !query) endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  if (!categoryId && query) endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  if (categoryId && query) endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(endPoint);
  const dataCategoriesAndQuery = await response.json();
  return dataCategoriesAndQuery;
}

export async function getProductById(id) {
  const endPoint = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(endPoint);
  const product = await response.json();
  return product;
}
