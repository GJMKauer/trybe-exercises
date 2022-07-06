const validEmail = 'teste@trybe.com';
const validPassword = '1234567';

const invalidEmail = 'oi';
const invalidPassword = '123';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=garlic';

const mockHeader = {
  meals: [
    {
      strMeal: 'Baingan Bharta',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg',
      idMeal: '52807',
    },
    {
      strMeal: 'BBQ Pork Sloppy Joes',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg',
      idMeal: '52995',
    },
    {
      strMeal: 'Beef and Oyster pie',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg',
      idMeal: '52878',
    },
    {
      strMeal: 'Beef Brisket Pot Roast',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg',
      idMeal: '52812',
    },
  ],
};

const searchIcon = 'Search icon';

export {
  validEmail,
  validPassword,
  invalidEmail,
  invalidPassword,
  API_URL,
  mockHeader,
  searchIcon,
};
