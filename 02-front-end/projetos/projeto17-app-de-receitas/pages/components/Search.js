import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setRadioFilter, setData } from '../../redux/slices/search';

function Search() {
  const { pathname } = useLocation();
  const history = useHistory();
  const searchSelector = useSelector(({ search }) => (search));
  const dispatch = useDispatch();

  const handleSearch = ({ target: { value } }) => {
    dispatch(setSearch(value));
  };

  const handleRadio = ({ target: { id } }) => {
    dispatch(setRadioFilter(id));
  };

  const redirectData = (fetchedData) => {
    if (fetchedData.meals === null || fetchedData.drinks === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
    if (pathname === '/foods' && fetchedData.meals !== null
      && fetchedData.meals.length === 1) {
      history.push(`/foods/${fetchedData.meals[0].idMeal}`);
    }
    if (pathname === '/drinks' && fetchedData.drinks !== null
      && fetchedData.drinks.length === 1) {
      history.push(`/drinks/${fetchedData.drinks[0].idDrink}`);
    }
  };

  let API_URL = '';
  const searchButton = () => {
    if (searchSelector.radioFilter === 'letter' && searchSelector.search.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      dispatch(setSearch(''));
    } else {
      if (pathname === '/foods') {
        switch (searchSelector.radioFilter) {
        case 'ingredient': { API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchSelector.search}`;
          dispatch(setSearch(''));
          break;
        }
        case 'name': { API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchSelector.search}`;
          dispatch(setSearch(''));
          break;
        }
        default: API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchSelector.search.charAt(0)}`;
          dispatch(setSearch(''));
        }
      } else {
        switch (searchSelector.radioFilter) {
        case 'ingredient': {
          API_URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchSelector.search}`;
          dispatch(setSearch(''));
          break;
        }
        case 'name': {
          API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchSelector.search}`;
          dispatch(setSearch(''));
          break;
        }
        default:
          API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchSelector.search.charAt(0)}`;
          dispatch(setSearch(''));
        }
      } // break line
      const fetchAPI = async () => {
        const response = await fetch(API_URL);
        const fetchedData = await response.json();
        dispatch(setData(fetchedData));
        redirectData(fetchedData);
      };
      fetchAPI();
    }
  };

  return (
    <div>
      <label htmlFor="search-input">
        Search Recipe
        <input
          type="text"
          data-testid="search-input"
          id="search-input"
          name="search"
          placeholder="Search"
          value={ searchSelector.search }
          onChange={ handleSearch }
        />
      </label>
      <label htmlFor="ingredient">
        Ingredient:
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="radio-filter"
          id="ingredient"
          onChange={ handleRadio }
        />
      </label>
      <label htmlFor="name">
        Name:
        <input
          type="radio"
          data-testid="name-search-radio"
          name="radio-filter"
          id="name"
          onChange={ handleRadio }
        />
      </label>
      <label htmlFor="letter">
        First letter:
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="radio-filter"
          id="letter"
          onChange={ handleRadio }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        name="search-btn"
        id="search-btn"
        onClick={ searchButton }
      >
        Search
      </button>
    </div>

  );
}

export default Search;
