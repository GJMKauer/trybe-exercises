import React, { useEffect, useState } from 'react';
import '../App.css';
import Header from './components/Header';
import DoneRecipeCard from './components/DoneRecipeCard';
import ButtonFilterDoneRecipes from './components/ButtonFilterDoneRecipes';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([{
    id: '',
    type: '',
    nationality: '',
    category: '',
    alcoholicOrNot: '',
    name: '',
    image: '',
    doneDate: '',
    tags: [],
  }]);

  useEffect(() => {
    setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')) || []);
  }, []);

  return (
    <div>
      <Header />
      <ButtonFilterDoneRecipes setDoneRecipes={ setDoneRecipes } />
      {
        doneRecipes.map(({ image,
          name,
          category,
          nationality,
          id,
          type,
          alcoholicOrNot,
          doneDate,
          tags,
        }, index) => (
          <DoneRecipeCard
            key={ id }
            image={ image }
            category={ category }
            nationality={ nationality }
            id={ id }
            name={ name }
            alcoholicOrNot={ alcoholicOrNot }
            type={ type }
            index={ index }
            doneDate={ doneDate }
            tags={ tags }
          />))
      }
    </div>
  );
}

export default DoneRecipes;
