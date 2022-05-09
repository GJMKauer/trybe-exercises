import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

const moreDetailsMsg = 'More details';

describe('Teste o componente <PokemonDetails.js />', () => {
  it(`Testa se as informações detalhadas do pokémon selecionado
  são mostradas na tela`, () => {
    renderWithRouter(<App />);

    const moreDetailsBtn = screen.getByRole('link', { name: moreDetailsMsg });
    expect(moreDetailsBtn).toBeInTheDocument();

    userEvent.click(moreDetailsBtn);

    const hDetails = screen.getByRole('heading', { name: 'Pikachu Details', level: 2 });
    expect(hDetails).toBeInTheDocument();

    expect(moreDetailsBtn).not.toBeInTheDocument();

    const hSummary = screen.getByRole('heading', { name: 'Summary', level: 2 });
    expect(hSummary).toBeInTheDocument();

    const bSummary = screen.getByText(/This intelligent Pokémon/i);
    expect(bSummary).toBeInTheDocument();
  });

  it(`Testa se existe na página uma seção com os mapas
  contendo as localizações do pokémon`, () => {
    renderWithRouter(<App />);

    const moreDetailsBtn = screen.getByRole('link', { name: moreDetailsMsg });
    expect(moreDetailsBtn).toBeInTheDocument();

    userEvent.click(moreDetailsBtn);

    const hLocations = screen.getByRole(
      'heading', { name: 'Game Locations of Pikachu', level: 2 },
    );
    expect(hLocations).toBeInTheDocument();

    const locationOneName = screen.getByText('Kanto Viridian Forest');
    const locationTwoName = screen.getByText('Kanto Power Plant');
    const locationMaps = screen.getAllByRole('img', { name: 'Pikachu location' });
    expect(locationOneName).toBeInTheDocument();
    expect(locationTwoName).toBeInTheDocument();
    expect(locationMaps).toHaveLength(2);
    expect(locationMaps[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(locationMaps[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Testa se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);

    const moreDetailsBtn = screen.getByRole('link', { name: moreDetailsMsg });
    expect(moreDetailsBtn).toBeInTheDocument();

    userEvent.click(moreDetailsBtn);

    const favoriteInput = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
    expect(favoriteInput).toBeInTheDocument();
    userEvent.click(favoriteInput);

    const starImage = screen.getByRole('img', { name: 'Pikachu is marked as favorite' });
    expect(starImage).toBeInTheDocument();
    expect(starImage).toHaveAttribute('src', '/star-icon.svg');

    userEvent.click(favoriteInput);
    expect(starImage).not.toBeInTheDocument();
  });
});
