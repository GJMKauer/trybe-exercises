import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      details: [],
      email: '',
      avaliacao: '',
      avalia: 1, // alterado estado inicial para ''
      filtrarAvaliacao: [], // criado estado para renderizacao
      caracteristicas: [],
    };
  }

  componentDidMount = () => {
    this.showDetails();
    this.loadAvaliation(); // carrega avaliacoes somente do produdo filtrado assim que monta o componente
  };

  showDetails = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const retorno = await api.getProductById(id);
    this.setState({
      details: retorno,
      caracteristicas: retorno.attributes,
    });
  };

  saveButton = async () => {
    const { details } = this.state;
    const storageReturn = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemsCart = storageReturn.find((el) => el.id === details.id);
    if (itemsCart) {
      // const newStorageReturn = storageReturn.filter((el) => el.id !== details.name);
      itemsCart.qtd += 1;
      // newStorageReturn.push(itemsCart);
      localStorage.setItem('cartItems', JSON.stringify(storageReturn));
    } else {
      details.qtd = (details.qtd || 0) + 1;
      storageReturn.push(details);
      localStorage.setItem('cartItems', JSON.stringify(storageReturn));
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const checkInputType = target.type === 'radio' ? target.id : target.value;
    this.setState({
      [name]: checkInputType,
    });
  };

  handleSaveButton = ({ target }) => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    target.checked = true;
    const { avalia, avaliacao, email } = this.state;
    const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
    avaliacoes.push({ // desestrutura e usa shorthand porque demos mesmo nome
      id,
      avalia,
      avaliacao,
      email,
    });
    localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));
    // limpar avalia, avaliacao, email
    this.setState({
      email: '',
      avaliacao: '',
      avalia: 1, // alterado estado inicial para ''
    });
    this.loadAvaliation();
  };

  loadAvaliation = () => {
    const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || []; // carrega dados do localStorage
    const {
      match: {
        params: { id },
      },
    } = this.props; // traz props
    const verificaID = avaliacoes.filter((aval) => aval.id === id); // filtrando dados do localStorage - renderizar apenas do produto
    this.setState({
      filtrarAvaliacao: verificaID,
    });
  };

  render() {
    const { details, email, avaliacao, filtrarAvaliacao, caracteristicas } = this.state;
    return (
      <div>
        <p>Detalhes do Produto</p>
        <Link data-testid="shopping-cart-button" to="/cart">
          Carrinho de Compras
        </Link>
        <div>
          <p data-testid="product-detail-name">{ details.title }</p>
          <img alt={ details.title } src={ details.thumbnail } />
          <p>{ `R$ ${details.price}` }</p>
          <p>Especificações Técnicas</p>
          { caracteristicas.map((element, index) => (
            <div key={ index }>
              <p>{ `${element.name}: ${element.value_name}` }</p>
            </div>
          )) }

          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.saveButton }
            name={ details.id }
          >
            Adicionar ao carrinho
          </button>
        </div>
        <form>
          <input
            placeholder="Email"
            type="email"
            data-testid="product-detail-email"
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
          <div>
            <label htmlFor="comentario">
              Deixe seu comentário
              <textarea
                id="comentario"
                data-testid="product-detail-evaluation"
                value={ avaliacao }
                name="avaliacao"
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="1" className="input">
              1
              <input
                type="radio"
                data-testid="1-rating"
                id="1"
                value="1"
                name="avalia"
                defaultChecked
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="2" className="input">
              2
              <input
                type="radio"
                data-testid="2-rating"
                id="2"
                value="2"
                name="avalia"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="3" className="input">
              3
              <input
                type="radio"
                data-testid="3-rating"
                id="3"
                value="3"
                name="avalia"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="4" className="input">
              4
              <input
                type="radio"
                data-testid="4-rating"
                id="4"
                value="4"
                name="avalia"
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="5" className="input">
              5
              <input
                type="radio"
                data-testid="5-rating"
                id="5"
                value="5"
                name="avalia"
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <button
              type="button"
              data-testid="submit-review-btn"
              onClick={ this.handleSaveButton }
            >
              Avaliar
            </button>
          </div>
        </form>
        <div>
          <ul>
            { filtrarAvaliacao.map((elem, index) => ( // renderiza avaliação do produto filtrado
              <div key={ index }>
                <p>{ elem.email }</p>
                <p>{ elem.avaliacao }</p>
                <p>{ elem.avalia }</p>
              </div>
            )) }
          </ul>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

Details.defaultProps = {
  match: null,
};

export default Details;
