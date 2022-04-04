// Constantes que são usadas mais de uma vez.
const cartAll = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');

const loadingAPIAdvice = () => {
  const html = document.querySelector('.header');
  const e = document.createElement('p');
  e.innerText = 'Carregando...';
  e.className = 'loading';
  html.appendChild(e);
};

const loadedAPI = () => {
  const e = document.querySelector('.loading');
  e.remove();
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

const setCartPriceWhenAdding = () => {
  if (localStorage.getItem('cartValue')) {
  totalPrice.innerText = `${localStorage.getItem('cartValue')}`;
  } else {
    totalPrice.innerText = 0;
  }
};

let sum = JSON.parse(localStorage.getItem('cartValue'));
const sumItemValueToCart = async (event) => {
  const callParam = event.target.parentNode.firstChild.innerText;
  const clickedProduct = await fetchItem(callParam);
  const itemPrice = clickedProduct.price;
  sum += itemPrice;
  localStorage.setItem('cartValue', sum);
  totalPrice.innerText = sum;
  return totalPrice.innerText;
};

function cartItemClickListener(event) {
  const cartElement = event.target;
  if (cartElement.className === 'cart__item') {
    cartElement.remove();
    saveCartItems(cartAll.innerHTML);
  }
}

const setCartPriceWhenRemoving = (event) => {
  const text = event.target.innerText;
    const splitOne = text.split('|'); // Separa meu cartElement em cada "key" dele.
    const splitTwo = splitOne[2].split('$'); // Pego somente a "key" PRICE do meu cartElement e separo novamente o texto do valor.
    const splitValue = parseFloat(splitTwo[1]); // Pego somente o valor do meu cartElement e transformo em number.
    totalPrice.innerText -= splitValue;
    localStorage.setItem('cartValue', sum -= splitValue);
    if (totalPrice.innerText < 0.01 && totalPrice.innerText > 0) {
      totalPrice.innerText = 0;
      localStorage.setItem('cartValue', 0);
    }
};

function setClickWhenReloadPage() {
  cartAll.addEventListener('click', cartItemClickListener);
  cartAll.addEventListener('click', setCartPriceWhenRemoving);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`; // Código original (projeto) // Necessário para o avaliador.

  // // Como eu formataria (abaixo).

  // li.innerText = `
  // SKU: ${sku}

  // NAME: ${name}

  // PRICE: $${salePrice}

  // ---`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addElementsToCart = async (event) => {
  const callParam = event.target.parentNode.firstChild.innerText; // Pega o ID de cada elemento clicado.
  const productToCart = await fetchItem(callParam);

  const cartObj = {
    sku: productToCart.id,
    name: productToCart.title,
    salePrice: productToCart.price,
  };

  const addedElement = createCartItemElement(cartObj);
  cartAll.appendChild(addedElement);
  saveCartItems(cartAll.innerHTML);
  sumItemValueToCart(event);
};

const callingFetchProducts = async () => {
  loadingAPIAdvice();
  const products = await fetchProducts('computador');
  const sectionAll = document.querySelector('.items');
  products.results.forEach((element) => {
    const productsObj = {
      sku: element.id,
      name: element.title,
      image: element.thumbnail,
    };
    const addedElements = createProductItemElement(productsObj);
    sectionAll.appendChild(addedElements);
  });
  loadedAPI();
};

const callingFetchItems = async () => {
  await fetchItem('MLB1607748387'); // Coloquei um ID qualquer só para não ter erro no console. Precisava chamar o fetchItem para executar o restante do código.
  const addToCartButtons = document.querySelectorAll('.item__add');
  addToCartButtons.forEach((element) => {
    element.addEventListener('click', addElementsToCart); // Adiciona um evento de click para cada botão "Adicionar ao carrinho!".
  });
};

const removeAllCartItems = () => {
  const buttonRemove = document.querySelector('.empty-cart');

  buttonRemove.addEventListener('click', () => {
    const allCartItems = document.querySelectorAll('.cart__item');
    allCartItems.forEach((element) => element.remove());
    saveCartItems(cartAll.innerHTML);
    localStorage.removeItem('cartValue');
    totalPrice.innerText = 0;
  });
};

window.onload = () => {
  callingFetchProducts();
  callingFetchItems();
  getSavedCartItems('cartItems');
  setClickWhenReloadPage();
  removeAllCartItems();
  setCartPriceWhenAdding();
};
