import React, { Component } from 'react';
import ButtonCheckout from './ButtonCheckout';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      atualiza: false,
      totalCompra: '',
    };
  }

  componentDidMount() {
    this.reduceCalculator();
  }

  adicionaItem = ({ target }) => {
    const { atualiza } = this.state;
    console.log(atualiza);
    this.setState({ atualiza: true }, () => {
      const storage = JSON.parse(localStorage.getItem('cartItems'));
      const adicionarItens = storage.find((el) => el.id === target.name);
      console.log('Adicionando', adicionarItens);
      adicionarItens.qtd += 1;
      localStorage.setItem('cartItems', JSON.stringify(storage));
      this.setState({ atualiza: false });
      this.reduceCalculator();
    });
  }

  retiraItem = ({ target }) => {
    const { atualiza } = this.state;
    console.log(atualiza);
    this.setState({ atualiza: true }, () => {
      const storage = JSON.parse(localStorage.getItem('cartItems'));
      const retirarItens = storage.find((el) => el.id === target.name);
      retirarItens.qtd -= 1;
      localStorage.setItem('cartItems', JSON.stringify(storage));
      this.setState({ atualiza: false });
      this.reduceCalculator();
    });
  }

  removeProduto = ({ target }) => {
    const { atualiza } = this.state;
    console.log(atualiza);
    this.setState({ atualiza: true }, () => {
      const storage = JSON.parse(localStorage.getItem('cartItems'));
      const remove = storage.filter((produto) => produto.id !== target.name);
      localStorage.setItem('cartItems', JSON.stringify(remove));
      this.setState({ atualiza: false });
      this.reduceCalculator();
    });
  }

  reduceCalculator = () => {
    const storage = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalBuy = [];
    storage.map((element) => (
      totalBuy.push(element.qtd * element.price)
    ));
    const iniciaValor = 0;
    const constSum = totalBuy
      .reduce((prevValue, currentValue) => prevValue + currentValue, iniciaValor);

    this.setState({
      totalCompra: constSum,
    });
  }

  render() {
    const { totalCompra } = this.state;
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div className="cart-component">

        { storage === null || storage.length === 0
          ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>) : (
            storage.map((element) => (
              <div key={ element.id }>
                <p data-testid="shopping-cart-product-name">
                  { element.title }
                </p>
                <img alt={ element.title } src={ element.thumbnail } />
                <p>
                  { `R$ ${element.price * element.qtd}` }
                </p>
                <div>
                  <p data-testid="shopping-cart-product-quantity">{ element.qtd }</p>
                </div>
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  name={ element.id }
                  onClick={ this.adicionaItem }
                >
                  +
                </button>
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  name={ element.id }
                  onClick={ this.retiraItem }
                  disabled={ element.qtd <= 0 }
                >
                  -
                </button>
                <button type="button" name={ element.id } onClick={ this.removeProduto }>
                  x
                </button>
              </div>
            ))
          ) }
        <p>
          {`Total da Compra R$ ${totalCompra} `}
        </p>
        <ButtonCheckout />
      </div>
    );
  }
}

export default Cart;
