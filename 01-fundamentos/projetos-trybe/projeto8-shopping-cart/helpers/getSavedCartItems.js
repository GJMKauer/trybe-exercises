const getSavedCartItems = async (localStorageKey) => {
  const cartAll = document.querySelector('.cart__items');
  cartAll.innerHTML = localStorage.getItem(localStorageKey);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
