import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ButtonCheckout extends Component {
  constructor() {
    super();
    this.state = {
      goToCheckout: false,
    };
  }

    funcGoToCheckOut = () => {
      this.setState({
        goToCheckout: true,
      });
    }

    render() {
      const { goToCheckout } = this.state;
      return (
        goToCheckout ? <Redirect to="/Checkout" /> : (
          <div className="componente-btn-checkout">
            <button
              type="button"
              data-testid="checkout-products"
              onClick={ this.funcGoToCheckOut }
            >
              Finalizar compra
            </button>
          </div>
        )
      );
    }
}

export default ButtonCheckout;
