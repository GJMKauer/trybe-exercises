import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import '../App.css';
import FavoriteCard from './components/FavoritesCard';
import ButtonFilterFavoriteRecipes from './components/ButtonFilterFavoriteRecipes';

function FavoriteRecipes() {
  const [unfavorite, setUnfavorite] = useState(false);
  const [localStorageS, setLocalStorageS] = useState([{
    id: '',
    type: '',
    nationality: '',
    category: '',
    alcoholicOrNot: '',
    name: '',
    image: '',
  }]);

  useEffect(() => {
    setLocalStorageS(JSON.parse(localStorage.getItem('favoriteRecipes')) || []);
  }, [unfavorite]);

  return (
    <div>
      <Header />
      <ButtonFilterFavoriteRecipes setLocalStorageS={ setLocalStorageS } />
      {
        localStorageS.map(({ image,
          name,
          category,
          nationality,
          id,
          type,
          alcoholicOrNot,
        }, index) => (
          <FavoriteCard
            key={ id }
            image={ image }
            category={ category }
            nationality={ nationality }
            id={ id }
            name={ name }
            alcoholicOrNot={ alcoholicOrNot }
            type={ type }
            index={ index }
            localStorageS={ localStorageS }
            setUnfavorite={ setUnfavorite }
            unfavorite={ unfavorite }
          />))
      }
    </div>
  );
}
export default FavoriteRecipes;
