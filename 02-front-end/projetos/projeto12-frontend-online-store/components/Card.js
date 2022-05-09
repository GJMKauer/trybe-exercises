import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  saveButton = ({ target }) => {
    const { listaDeProdutos } = this.props;
    const itemsCart = listaDeProdutos.find((el) => el.id === target.name);
    // const newListadeProdutos = listaDeProdutos.filter((el) => el.id !== target.name);
    itemsCart.qtd = (itemsCart.qtd || 0) + 1;
    const storageReturn = JSON.parse(localStorage.getItem('cartItems')) || [];
    // console.log('listadeProdutos', listaDeProdutos);
    // console.log('storageReturn', storageReturn);
    storageReturn.push(itemsCart);
    localStorage.setItem('cartItems', JSON.stringify(storageReturn));
  }

  render() {
    const { listaDeProdutos, algoFoiPesquisado } = this.props;
    const nothingFound = (<p>Nenhum produto encontrado.</p>);
    const retornoCard = (
      listaDeProdutos.map((produto) => (
        <div data-testid="product" key={ produto.id }>
          <p>
            { produto.title }
          </p>
          <img alt={ produto.title } src={ produto.thumbnail } />
          <p>
            { `R$ ${produto.price}` }
          </p>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ this.saveButton }
            name={ produto.id }
          >
            Adicionar ao carrinho
          </button>
          <Link
            data-testid="product-detail-link"
            to={ `/details/${produto.id}` }
          >
            Detalhes do Produto
          </Link>
        </div>))
    );

    return (
      <div>
        { listaDeProdutos.length === 0 && algoFoiPesquisado ? retornoCard : nothingFound }

      </div>
    );
  }
}

Card.propTypes = {
  listaDeProdutos: propTypes.arrayOf(propTypes.shape).isRequired,
  algoFoiPesquisado: propTypes.bool.isRequired,
};

export default Card;
