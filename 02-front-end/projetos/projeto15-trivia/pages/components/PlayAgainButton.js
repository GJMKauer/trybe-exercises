import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { changeState, dataTestId } = this.props;

    return (
      <section>
        <button
          type="button"
          data-testid={ dataTestId }
          onClick={ changeState }
        >
          Play Again
        </button>
      </section>
    );
  }
}

Button.propTypes = {
  changeState: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default Button;
