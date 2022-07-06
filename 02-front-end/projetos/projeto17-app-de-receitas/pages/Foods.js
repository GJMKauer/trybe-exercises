import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ButtonFilter from './components/ButtonFilters';
import '../App.css';
import MealsRender from './components/MealsRender';

function Foods() {
  return (
    <div>
      <Header />
      <ButtonFilter context="listFood" />
      <MealsRender />
      <Footer />
    </div>
  );
}

export default Foods;
