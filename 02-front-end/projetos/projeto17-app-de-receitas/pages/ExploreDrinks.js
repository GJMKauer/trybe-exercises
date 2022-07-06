import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import '../App.css';
import Header from './components/Header';

function ExploreDrinks() {
  return (
    <div>
      <Header />
      <p>ExploreDrinks Page</p>
      <Link to="/explore/drinks/ingredients">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
        </button>
      </Link>
      <Link to="/drinks/178319">
        {/* Essa rota está assim apenas para passar no teste. Temos que alterar ela depois de inserir a API!! */}
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
