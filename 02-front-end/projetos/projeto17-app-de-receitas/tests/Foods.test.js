import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
// import Drinks from '../tests/helpers/mockDrinks'
import App from '../App';

const seachButton = 'search-top-btn';

describe('Testa a página de Drinks da aplicação', () => {
  it('Teste 1 - Testa se tem o título', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/foods');

    const pageHeading = screen.getByText('Foods');
    expect(pageHeading).toBeInTheDocument();
  });

  it('Teste 2 - Testa se a página possui dois inputs do tipo image', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/foods');

    const pageHeading = screen.getByText('Foods');
    const inputUserImage = screen.getByTestId('profile-top-btn');
    const inputSearchImage = screen.getByTestId(seachButton);

    expect(pageHeading).toBeInTheDocument();
    expect(inputUserImage).toBeInTheDocument();
    expect(inputSearchImage).toBeInTheDocument();
  });

  it('Teste 3 - Testa se a página apresenta 12 tipos de drinks', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const limitImages = 12;
    const getImageCard = await screen.findAllByRole('img');
    expect(getImageCard.length).toBe(limitImages);
  });

  it('Teste 4 - Testa se a página possui 5 botões de filtro', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');

    const buttonBeef = await screen.findByRole('button', {
      name: 'Beef',
    });
    const buttonBreakfast = await screen.findByRole('button', {
      name: 'Breakfast',
    });
    const buttonChicken = await screen.findByRole('button', {
      name: 'Chicken',
    });
    const buttonDessert = await screen.findByRole('button', {
      name: 'Dessert',
    });
    const buttonGoat = await screen.findByRole('button', {
      name: 'Goat',
    });
    const buttonAll = await screen.findByRole('button', {
      name: 'All',
    });

    expect(buttonBeef).toBeInTheDocument();
    expect(buttonBreakfast).toBeInTheDocument();
    expect(buttonChicken).toBeInTheDocument();
    expect(buttonDessert).toBeInTheDocument();
    expect(buttonGoat).toBeInTheDocument();
    expect(buttonAll).toBeInTheDocument();
  });

  it('Teste 5 - Testa se ao clicar no ícone search, opções de filtro são renderizadas',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/foods');

      const inputSearchImage = screen.getByTestId(seachButton);

      userEvent.click(inputSearchImage);
      const labelSearch = screen.getByLabelText('Search Recipe');
      const labelIngredient = screen.getByLabelText('Ingredient:');
      const labelName = screen.getByLabelText('Name:');
      const labelFirstletter = screen.getByLabelText('First letter:');
      const buttonSearch = screen.getByRole('button', { name: 'Search' });

      expect(labelSearch).toBeInTheDocument();
      expect(labelIngredient).toBeInTheDocument();
      expect(labelName).toBeInTheDocument();
      expect(labelFirstletter).toBeInTheDocument();
      expect(buttonSearch).toBeInTheDocument();
    });

  it('Teste 6 - testa se o filtro de first letter filtra pela primeira letra',
    async () => {
      const { history } = renderWithRouter(<App />);

      history.push('/drinks');

      const inputSearchImage = screen.getByTestId(seachButton);

      const filterC = [
        'Chocolate Gateau',
        'Chicken Enchilada Casserole',
        'Cream Cheese Tart',
        'Christmas Pudding Flapjack',
        'Chicken Handi',
        'Chicken Alfredo Primavera',
        'Chicken Fajita Mac and Cheese',
        'Cajun spiced fish tacos',
        'Crock Pot Chicken Baked Tacos',
        'Chicken Karaage',
        'Coq au vin',
        'Chilli prawn linguine',
      ];
      userEvent.click(inputSearchImage);
      const inputSearch = screen.getByTestId('search-input');
      const button = screen.getByTestId('exec-search-btn');
      const firstLetter = screen.getByTestId('first-letter-search-radio');
      userEvent.type(inputSearch, 'c');
      userEvent.click(firstLetter);
      userEvent.click(button);

      const getImageCard = await screen.findAllByRole('img');
      expect(getImageCard.length).toBe(filterC.length);
    });
  it('Teste 6 - testa se o filtro de Name filtra pelo nome',
    async () => {
      const { history } = renderWithRouter(<App />);

      history.push('/foods');

      const inputSearchImage = screen.getByTestId(seachButton);

      const filterName = [
        'Salmon Avocado Salad',
        'Mediterranean Pasta Salad',
        'Chicken Quinoa Greek Salad',
        'Spicy North African Potato Salad',
      ];

      userEvent.click(inputSearchImage);
      const inputSearch = screen.getByTestId('search-input');
      const name = screen.getByTestId('name-search-radio');
      const button = screen.getByTestId('exec-search-btn');
      userEvent.type(inputSearch, 'salad');
      userEvent.click(name);
      userEvent.click(button);
      const getImageCards = await screen.findAllByRole('img');
      expect(getImageCards.length).toBe(filterName.length);
    });

  // it('teste 7 - Testa se ao clicar nos botões de filtro, a lista de drinks é alterada',
  //   async () => {
  //     const { history } = renderWithRouter(<App />);
  //     history.push('/drinks');

  //     const buttonOrdinary = await screen.findByRole('button', {
  //       name: 'Ordinary Drink',
  //     });
  //     fireEvent.click(buttonOrdinary);
  //     const cardImage = await screen.findAllByRole('img');
  //     expect(cardImage[0]).toHaveAttribute('src', 'https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg');
  //   });
});
