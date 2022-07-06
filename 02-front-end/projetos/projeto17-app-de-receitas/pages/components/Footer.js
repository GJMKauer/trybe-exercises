import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer" className="footer-component">
      <Link to="/drinks">
        <input
          type="image"
          id="drinks-bottom-btn"
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="Drink Icon"
        />
      </Link>
      <Link to="/explore">
        <input
          type="image"
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="Explore Icon"
        />
      </Link>
      <Link to="/foods">
        <input
          type="image"
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="Meal Icon"
        />
      </Link>
    </footer>
  );
}

export default Footer;
