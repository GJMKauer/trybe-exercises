import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import Search from './Search';

function Header() {
  const { pathname } = useLocation();
  const [showBar, setShowBar] = useState(false);

  const showSearchBar = () => {
    if (pathname === '/foods'
    || pathname === '/explore/foods/nationalities'
    || pathname === '/drinks') {
      return (<input
        data-testid="search-top-btn"
        type="image"
        src={ searchIcon }
        alt="Search icon"
        onClick={ () => setShowBar(!showBar) }
      />);
    }
  };

  const paragraph = (<p data-testid="page-title">Explore Ingredients</p>);

  const createTitle = () => {
    switch (pathname) {
    case '/drinks': return <p data-testid="page-title">Drinks</p>;
    case '/explore': return <p data-testid="page-title">Explore</p>;
    case '/explore/foods': return <p data-testid="page-title">Explore Foods</p>;
    case '/explore/drinks': return <p data-testid="page-title">Explore Drinks</p>;
    case '/explore/foods/ingredients': return paragraph;
    case '/explore/drinks/ingredients': return paragraph;
    case '/explore/foods/nationalities': return (
      <p data-testid="page-title">Explore Nationalities</p>);
    case '/done-recipes': return <p data-testid="page-title">Done Recipes</p>;
    case '/favorite-recipes': return <p data-testid="page-title">Favorite Recipes</p>;
    case '/profile': return <p data-testid="page-title">Profile</p>;
    default:
      return <p data-testid="page-title">Foods</p>;
    }
  };

  return (
    <div
      style={ {
        display: 'flex',
        width: '100vh',
        justifyContent: 'space-between',
        alignItems: 'center',
      } }
    >
      <Link to="/profile">
        <input
          data-testid="profile-top-btn"
          type="image"
          src={ profileIcon }
          alt="Profile icon"
        />
      </Link>
      {createTitle()}
      {showSearchBar()}
      {showBar && <Search />}
    </div>
  );
}

export default Header;
