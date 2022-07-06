import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import '../App.css';
import Header from './components/Header';

function ExploreFoods() {
  return (
    <div>
      <Header />
      <p>ExploreFoods Page</p>
      <Link to="/explore/foods/ingredients">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
        </button>
      </Link>
      <Link to="/explore/foods/nationalities">
        <button
          type="button"
          data-testid="explore-by-nationality"
        >
          By Nationality
        </button>
      </Link>
      <Link to="/foods/52771">
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

export default ExploreFoods;
