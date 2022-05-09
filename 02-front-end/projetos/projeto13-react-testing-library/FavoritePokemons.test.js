import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it(`Teste se é exibida na tela a mensagem "No favorite pokemon found",
  caso a pessoa não tenha pokémons favoritos`, () => {
    const { history } = renderWithRouter(<App />);

    const navThree = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(navThree).toBeInTheDocument();

    userEvent.click(navThree);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');

    const nullFavText = screen.getByText('No favorite pokemon found');
    expect(nullFavText).toBeInTheDocument();
  });

  it('Teste se são exibidos todos os cards de pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);

    const detailPokemon = screen.getByRole('link', { name: 'More details' });
    expect(detailPokemon).toBeInTheDocument();
    userEvent.click(detailPokemon);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemons/25');

    const favoriteInput = screen.getByRole('checkbox');
    expect(favoriteInput).toBeInTheDocument();
    userEvent.click(favoriteInput);

    const navThree = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(navThree).toBeInTheDocument();
    userEvent.click(navThree);

    const textOne = screen.getByText('Pikachu');
    const textTwo = screen.getByText('Electric');
    const textThree = screen.getByText('Average weight: 6.0 kg');
    expect(textOne).toBeInTheDocument();
    expect(textTwo).toBeInTheDocument();
    expect(textThree).toBeInTheDocument();
  });
});
