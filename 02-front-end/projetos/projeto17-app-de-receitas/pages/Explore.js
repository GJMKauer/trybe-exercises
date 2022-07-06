import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import '../App.css';
import Header from './components/Header';

function Explore() {
  return (
    <div>
      <Header />
      <p>Explore Page</p>
      <Link to="/explore/foods">
        <button
          type="button"
          data-testid="explore-foods"
        >
          Explore Foods
        </button>
      </Link>
      <Link to="/explore/drinks">
        <button
          type="button"
          data-testid="explore-drinks"
        >
          Explore Drinks
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Explore;
