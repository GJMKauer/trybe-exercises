import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Oops.css';

export default class Oops extends Component {
  render() {
    const { history } = this.props;
    return (
      <section>
        <h1 className="error-header">Oops! Something went wrong</h1>
        <img
          alt="Error"
          src="https://neilpatel.com/wp-content/uploads/2019/05/ilustracao-sobre-o-error-404-not-found.jpeg"
          className="error-image"
        />
        <button
          type="button"
          onClick={ () => history.push('/') }
          className="home-button"
        >
          Return to home page
        </button>
      </section>
    );
  }
}

Oops.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

Oops.defaultProps = {
  history: null,
};
