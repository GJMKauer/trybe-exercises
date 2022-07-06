import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer';
import { setInitialMeals } from '../redux/slices/sliceOfFood';
import '../App.css';
import Header from './components/Header';
import MealsRender from './components/MealsRender';
import { TWELVE, ApiFoods } from './helpers/index';

function ExploreFoodsByNationality() {
  const [nations, setNations] = useState([]);
  const [selectedNation, setSelectedNation] = useState('All');

  const dispatch = useDispatch();

  const fetchNations = async () => {
    const request = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
    );
    const response = await request.json();
    setNations(response.meals);
  };

  useEffect(() => {
    fetchNations();
  }, []);

  const searchByArea = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedNation}`);
    const data = await response.json();
    const filteredFoodsByNation = data.meals.filter((e, i) => i < TWELVE);
    dispatch(setInitialMeals(filteredFoodsByNation));
  };

  const defaultFetch = async () => {
    const request = await fetch(ApiFoods);
    const response = await request.json();
    const allProducts = response.meals.filter((_food, index) => index < TWELVE);
    dispatch(setInitialMeals(allProducts));
  };

  useEffect(() => {
    if (selectedNation !== 'All') {
      searchByArea();
    } else {
      defaultFetch();
    }
  }, [selectedNation]);

  const handleArea = ({ target }) => {
    setSelectedNation(target.value);
    console.log(target.value);
  };

  return (
    <div>
      <Header />
      <select
        onChange={ (event) => handleArea(event) }
        data-testid="explore-by-nationality-dropdown"
      >
        <option data-testid="All-option">All</option>
        {nations.map((nacionalidade, i) => (
          <option key={ i } data-testid={ `${nacionalidade.strArea}-option` }>
            {nacionalidade.strArea}
          </option>
        ))}
      </select>

      <MealsRender />

      <Footer />
    </div>
  );
}

export default ExploreFoodsByNationality;
