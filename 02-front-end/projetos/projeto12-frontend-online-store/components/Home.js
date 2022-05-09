import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      valorPesquisa: '',
      id: '',
      cart: [],
      categorias: [],
      categories: [],
    };
  }

  componentDidMount = () => {
    this.retornoGet();
  }

  retornoGet = async () => {
    const renderiza = await api.getCategories();
    this.setState({
      categorias: renderiza,
    });
  }

  retornoCategory = async ({ target }) => {
    const { valorPesquisa } = this.state;
    const { id } = target;
    const category = await api.getProductsFromCategoryAndQuery(id);

    if (valorPesquisa.length === 0) {
      this.setState({
        categories: category.results,
        id,
        categoryClicked: true,
      });
    } else {
      const categoryQuery = await api.getProductsFromCategoryAndQuery(id, valorPesquisa);
      this.setState({
        categories: categoryQuery.results,
        id,
        categoryClicked: true,
      });
    }
  }

  handleInput = ({ target }) => {
    this.setState({
      valorPesquisa: target.value,
    });
  }

  handleClick = async () => {
    const { valorPesquisa, id, categoryClicked } = this.state;

    if (categoryClicked) {
      const returnFunc = await api.getProductsFromCategoryAndQuery(id, valorPesquisa);
      this.setState({
        categories: returnFunc.results,
      });
    } else {
      const returnFuncId = await api.getProductsFromCategoryAndQuery(null, valorPesquisa);
      this.setState({
        categories: returnFuncId.results,
      });
    }
  }

  // saveButton = ({ target }) => {
  //   console.log("entrou");
  //   const { listaDeProdutos } = this.state;
  //   const itemsCart = listaDeProdutos.find((el) => el.id === target.name);
  //   const newListadeProdutos = listaDeProdutos.filter((el) => el.id !== target.name);
  //   itemsCart.qtd = (itemsCart.qtd || 0) + 1;
  //   const storageReturn = JSON.parse(localStorage.getItem('cartItems')) || [];
  //   console.log("listadeProdutos", listaDeProdutos);
  //   console.log("storageReturn", storageReturn);
  //   storageReturn.push(itemsCart);
  //   localStorage.setItem('cartItems', JSON.stringify(storageReturn));
  // }

  // Essa funcao savebutton, fizemos primeiro o find ali pra achar o elemento, depois
  // o if else... filter de que se achasse o elemento, adicionava mais uma unidade.
  // Senão achasse, adicionava qtd 1.
  saveButton = async ({ target }) => {
    const storageReturn = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemsCart = storageReturn.find((el) => el.id === target.name);
    if (itemsCart) {
      const newStorageReturn = storageReturn.filter((el) => el.id !== target.name);
      itemsCart.qtd += 1;
      newStorageReturn.push(itemsCart);
      localStorage.setItem('cartItems', JSON.stringify(storageReturn));
    } else {
      const { categories } = this.state;
      const produtos = categories.find((el) => el.id === target.name);
      produtos.qtd = 1;
      storageReturn.push(produtos);
      localStorage.setItem('cartItems', JSON.stringify(storageReturn));
    }
  }

  render() {
    const {
      valorPesquisa,
      categorias,
      categories,
      cart } = this.state;
    const location = {
      pathname: '/cart',
      prop: cart,
    };

    return (
      <div>
        <div className="container">
          <input
            data-testid="query-input"
            type="text"
            value={ valorPesquisa }
            onChange={ this.handleInput }
            className="input-buscar"
          />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
            className="btn-buscar"
          >
            Buscar

          </button>
          <Link
            data-testid="shopping-cart-button"
            to={ location }
            className="classe-link"
          >
            Carrinho de Compras

          </Link>
        </div>
        <div className="div-todona">
          <div className="category-div">
            { categorias.map((categoria) => (
              <button
                data-testid="category"
                type="button"
                key={ categoria.name }
                id={ categoria.id }
                onClick={ this.retornoCategory }
              >
                { categoria.name }
              </button>)) }
          </div>
          <div className="div-produto">
            { categories.map((produtos) => (
              <div className="divinha" key={ produtos.id } data-testid="product">
                <p>
                  { produtos.title }
                </p>
                <img alt={ produtos.title } src={ produtos.thumbnail } />
                <p>
                  { `R$ ${produtos.price}` }
                </p>
                <Link
                  data-testid="product-detail-link"
                  to={ { pathname: `/details/${produtos.id}`, state: { param1: cart } } }
                >
                  Detalhes do Produto
                </Link>
                <button
                  type="button"
                  data-testid="product-add-to-cart"
                  onClick={ this.saveButton }
                  name={ produtos.id }
                >
                  Adicionar ao carrinho
                </button>
              </div>
            )) }
          </div>
          {/* <div className="card-div">
            <Card
              listaDeProdutos={ listaDeProdutos }
              algoFoiPesquisado={ algoFoiPesquisado }
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;
