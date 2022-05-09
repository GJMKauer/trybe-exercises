import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

const nextPokemon = 'Próximo pokémon';
const moreDetailsMsg = 'More details';

describe('Teste o componente <Pokemon.js />', () => {
  it('Testa se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);

    // Initial home pokémon
    let textOne = screen.getByText('Pikachu');
    const textTwo = screen.getByTestId('pokemon-type');
    let textThree = screen.getByText('Average weight: 6.0 kg');
    let pokemonImg = screen.getByRole('img', { name: 'Pikachu sprite' });
    let pokemonImgURL = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(textOne).toBeInTheDocument();
    expect(textTwo).toBeInTheDocument();
    expect(textTwo).toHaveTextContent('Electric');
    expect(textThree).toBeInTheDocument();
    expect(pokemonImg).toHaveAttribute('src', pokemonImgURL);

    const nextBtn = screen.getByRole('button', { name: nextPokemon });
    expect(nextBtn).toBeInTheDocument();
    userEvent.click(nextBtn);

    // After clicking next pokemon
    textOne = screen.getByText('Charmander');
    textThree = screen.getByText('Average weight: 8.5 kg');
    pokemonImg = screen.getByRole('img', { name: 'Charmander sprite' });
    expect(textOne).toBeInTheDocument();
    expect(textTwo).toBeInTheDocument();
    expect(textTwo).toHaveTextContent('Fire');
    expect(textThree).toBeInTheDocument();
    pokemonImgURL = 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png';
    expect(pokemonImg).toHaveAttribute('src', pokemonImgURL);
  });

  it(`Testa se o card do pokémon indicado na Pokédex contém um link de navegação
  para exibir detalhes deste pokémon. O link deve possuir a URL "/pokemons/<id>",
  onde "<id>" é o id do pokémon exibido`, () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: moreDetailsMsg });
    expect(moreDetails).toBeInTheDocument();
    expect(moreDetails).toHaveAttribute('href', '/pokemons/25');
  });

  it(`Testa se ao clicar no link de navegação do pokémon, é feito o redirecionamento
  da aplicação para a página de detalhes de pokémon.
  Testa também se a URL exibida no navegador muda para "/pokemon/<id>",
  onde "<id>" é o id do pokémon cujos detalhes se deseja ver`, () => {
    const { history } = renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: moreDetailsMsg });
    expect(moreDetails).toBeInTheDocument();

    const nextBtn = screen.getByRole('button', { name: nextPokemon });
    expect(nextBtn).toBeInTheDocument();
    userEvent.click(nextBtn);

    userEvent.click(moreDetails);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemons/4');
  });

  it('Testa se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: moreDetailsMsg });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);

    const favoriteInput = screen.getByRole('checkbox');
    expect(favoriteInput).toBeInTheDocument();
    userEvent.click(favoriteInput);

    let starImage = screen.getByRole('img', { name: 'Pikachu is marked as favorite' });
    expect(starImage).toBeInTheDocument();
    expect(starImage).toHaveAttribute('src', '/star-icon.svg');

    const navOne = screen.getByRole('link', { name: 'Home' });
    expect(navOne).toBeInTheDocument();
    userEvent.click(navOne);

    const nextBtn = screen.getByRole('button', { name: nextPokemon });
    expect(nextBtn).toBeInTheDocument();

    // Verifica se tem a imagem na nova Route
    starImage = screen.getByRole('img', { name: 'Pikachu is marked as favorite' });
    expect(starImage).toBeInTheDocument();

    userEvent.click(nextBtn);

    expect(starImage).not.toBeInTheDocument();
  });
});
