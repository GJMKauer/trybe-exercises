import React, { Component } from 'react';
import propTypes from 'prop-types';

class Search extends Component {
  render() {
    const { disable, createUserFunc, validateButton, searchValue } = this.props;

    return (
      <div data-testid="page-search">
        <label htmlFor="login-name-input">
          Insira o nome do artista:
          <input
            id="login-name-input"
            type="text"
            value={ searchValue }
            data-testid="search-artist-input"
            onChange={ validateButton }
          />
        </label>
        <button
          id="login-submit-button"
          type="button"
          data-testid="search-artist-button"
          disabled={ disable }
          onClick={ createUserFunc }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  disable: propTypes.bool.isRequired,
  createUserFunc: propTypes.func.isRequired,
  validateButton: propTypes.func.isRequired,
  searchValue: propTypes.string.isRequired,
};

export default Search;
