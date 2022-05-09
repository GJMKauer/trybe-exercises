import React, { Component } from 'react';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complement: '',
      number: '',
      city: '',
      state: '',
      totalCompra: '',
    };
  }

  componentDidMount() {
    this.reduceCalculator();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  reduceCalculator = () => {
    const storage = JSON.parse(localStorage.getItem('cartItems'));
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
    const {
      fullName, cpf, email, phone, cep,
    } = this.state;
    const { address, complement, number, city, state, totalCompra } = this.state;
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    console.log('estado map', totalCompra);
    return (
      <div className="checkout-div-products">
        <section className="review-product">
          <h2>Revise seus Produtos</h2>
          { storage.map((element) => (
            <div key={ element.id }>
              <p>
                { element.title }
              </p>
              <img alt={ element.title } src={ element.thumbnail } />
              <p>
                { `R$ ${element.price}` }
              </p>
              <div>
                <p>{ element.qtd }</p>
                <p> Total por item:</p>
                <p>{ element.qtd * element.price }</p>
              </div>
            </div>))}
          <h1>
            { totalCompra }
          </h1>
          {/* lista dos produtos adicionados ao carrinho */}
        </section>
        <section className="buyer-information">
          <h2>Informações do Comprador</h2>
          <label htmlFor="name-buyer">
            <input
              type="text"
              name="fullName"
              id="name-buyer"
              placeholder="Nome Completo"
              data-testid="checkout-fullname"
              value={ fullName }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="cpf-buyer">
            <input
              type="text"
              name="cpf"
              id="cpf-buyer"
              placeholder="CPF"
              data-testid="checkout-cpf"
              value={ cpf }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="email-buyer">
            <input
              type="email"
              name="email"
              id="email-buyer"
              placeholder="Email"
              data-testid="checkout-email"
              value={ email }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="phone-buyer">
            <input
              type="text"
              name="phone"
              id="phone-buyer"
              placeholder="Telefone"
              data-testid="checkout-phone"
              value={ phone }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="zip-code-buyer">
            <input
              type="text"
              name="cep"
              id="zip-code-buyer"
              placeholder="CEP"
              data-testid="checkout-cep"
              value={ cep }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="address-buyer">
            <input
              type="text"
              name="address"
              id="address-buyer"
              placeholder="Endereço"
              data-testid="checkout-address"
              value={ address }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="complement-address-buyer">
            <input
              type="text"
              name="complement"
              id="complement-address-buyer"
              placeholder="Complemento"
              value={ complement }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="home-number-buyer">
            <input
              type="number"
              name="number"
              id="home-number-buyer"
              placeholder="Número"
              value={ number }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="city-buyer">
            <input
              type="text"
              name="city"
              id="city-buyer"
              placeholder="Cidade"
              value={ city }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="state-buyer">
            <select
              name="state"
              id="state-buyer"
              value={ state }
              onChange={ this.handleChange }
              required
            >
              <option value="" selected disabled hidden>Estado</option>
              <option value="Acre">Acre</option>
              <option value="Alagoas">Alagoas</option>
              <option value="Amapá">Amapá</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Bahia">Bahia</option>
              <option value="Ceará">Ceará</option>
              <option value="Espírito Santo">Espírito Santo</option>
              <option value="Goiás">Goiás</option>
              <option value="Maranhão">Maranhão</option>
              <option value="Mato Grosso">Mato Grosso</option>
              <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Pará">Pará</option>
              <option value="Paraíba">Paraíba</option>
              <option value="Paraná">Paraná</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Piauí">Piauí</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Rio Grande do Norte">Rio Grande do Norte</option>
              <option value="Rio Grande do Sul">Rio Grande do Sul</option>
              <option value="Rondônia">Rondônia</option>
              <option value="Roraima">Roraima</option>
              <option value="Santa Catarina">Santa Catarina</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Sergipe">Sergipe</option>
              <option value="Tocantins">Tocantins</option>
              <option value="Distrito Federal">Distrito Federal</option>
            </select>
          </label>
        </section>
        <section className="payment-method">
          <h2>Método de Pagamento</h2>
          <label htmlFor="payment-method" required>
            <input type="radio" name="payment-method" id="boleto-method" />
            Boleto
            <br />
            Cartão de crédito
            <br />
            <input type="radio" name="payment-method" id="credit-card-method" />
            Visa
            <input type="radio" name="payment-method" id="credit-card-method" />
            MasterCard
            <input type="radio" name="payment-method" id="credit-card-method" />
            Elo
          </label>
          <br />
          <button type="submit">
            Comprar
          </button>
        </section>
      </div>
    );
  }
}

export default Checkout;
