import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ButtonFilter from './components/ButtonFilters';
import '../App.css';
import DrinksRender from './components/DrinksRender';

function Drinks() {
  return (
    <div>
      <Header />
      <ButtonFilter context="listDrink" />
      <DrinksRender />
      <Footer />
    </div>
  );
}

export default Drinks;
