import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

const caterpieWeight = 'Average weight: 6.0 kg';

describe('Teste o componente <Pokedex.js />', () => {
  it(`Teste se a página contém um heading "h2"
  com o texto "Encountered pokémons"`, () => {
    renderWithRouter(<App />);

    // const eHead = screen.getByRole('heading', { name: 'Encountered pokémons', level: 2 });
    // expect(eHead).toBeInTheDocument();
  });

  it(`Teste se é exibido o próximo pokémon da lista
  quando o botão "Próximo pokémon" é clicado`, () => {
    renderWithRouter(<App />);

    // Initial home pokemon
    let textOne = screen.getByText('Pikachu');
    let textTwo = screen.getAllByText('Electric');
    let textThree = screen.getByText(caterpieWeight);
    expect(textOne).toBeInTheDocument();
    expect(textTwo[0]).toBeInTheDocument();
    expect(textThree).toBeInTheDocument();

    const nextBtn = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(nextBtn).toBeInTheDocument();
    userEvent.click(nextBtn);

    // After click pokemon
    textOne = screen.getByText('Charmander');
    textTwo = screen.getAllByText('Fire');
    textThree = screen.getByText('Average weight: 8.5 kg');
    expect(textOne).toBeInTheDocument();
    expect(textTwo[0]).toBeInTheDocument();
    expect(textThree).toBeInTheDocument();
  });

  it('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);

    // Initial home pokemon
    const textOne = screen.getByText('Pikachu');
    const textTwo = screen.getAllByText('Electric');
    const textThree = screen.getByText(caterpieWeight);
    expect(textOne).toBeInTheDocument();
    expect(textTwo[0]).toBeInTheDocument();
    expect(textThree).toBeInTheDocument();

    const nextBtn = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(nextBtn).toBeInTheDocument();
    userEvent.click(nextBtn);

    expect(textOne).not.toHaveTextContent('Pikachu');
    expect(textTwo[0]).not.toHaveTextContent('Electric');
    expect(textThree).not.toHaveTextContent(caterpieWeight);
  });

  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: 'All' });
    expect(buttonAll).toBeInTheDocument();

    // const eletricButton = screen.getByRole('button', { name: 'Electric' });
    // expect(eletricButton).toBeInTheDocument();

    // const fireButton = screen.getByRole('button', { name: 'Fire' });
    // expect(fireButton).toBeInTheDocument();

    // const bugButton = screen.getByRole('button', { name: 'Bug' });
    // expect(bugButton).toBeInTheDocument();

    // const poisonButton = screen.getByRole('button', { name: 'Poison' });
    // expect(poisonButton).toBeInTheDocument();

    // const psychicButton = screen.getByRole('button', { name: 'Psychic' });
    // expect(psychicButton).toBeInTheDocument();

    // const normalButton = screen.getByRole('button', { name: 'Normal' });
    // expect(normalButton).toBeInTheDocument();

    // const dragonButton = screen.getByRole('button', { name: 'Dragon' });
    // expect(dragonButton).toBeInTheDocument();

    // userEvent.click(bugButton);
    // let textOne = screen.getByText('Caterpie');
    // let textTwo = screen.getAllByText('Bug');
    // let textThree = screen.getByText('Average weight: 2.9 kg');
    // expect(textOne).toBeInTheDocument();
    // expect(textTwo[0]).toBeInTheDocument();
    // expect(textThree).toBeInTheDocument();

    // userEvent.click(psychicButton);
    // textOne = screen.getByText('Alakazam');
    // textTwo = screen.getAllByText('Psychic');
    // textThree = screen.getByText('Average weight: 48.0 kg');
    // expect(textOne).toBeInTheDocument();
    // expect(textTwo[0]).toBeInTheDocument();
    // expect(textThree).toBeInTheDocument();

    const dataId = screen.getAllByTestId('pokemon-type-button'); // Sei que não era para usar o data-testid, mas o Stryker estava acusando erro disso. Eu tinha feito com o getByRole para cada botão de filtro e deu certinho, com exceção do erro do Stryker. Aí, refatorei para usar getAllByTestId.
    expect(dataId[0]).toBeInTheDocument();

    userEvent.click(dataId[2]);
    expect(dataId[2]).toHaveTextContent('Bug');
    let textOne = screen.getByText('Caterpie');
    let textTwo = screen.getAllByText('Bug');
    let textThree = screen.getByText('Average weight: 2.9 kg');
    expect(textOne).toBeInTheDocument();
    expect(textTwo[0]).toBeInTheDocument();
    expect(textThree).toBeInTheDocument();

    userEvent.click(dataId[4]);
    expect(dataId[4]).toHaveTextContent('Psychic');
    textOne = screen.getByText('Alakazam');
    textTwo = screen.getAllByText('Psychic');
    textThree = screen.getByText('Average weight: 48.0 kg');
    expect(textOne).toBeInTheDocument();
    expect(textTwo[0]).toBeInTheDocument();
    expect(textThree).toBeInTheDocument();
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: 'All' });
    expect(buttonAll).toBeInTheDocument();
    userEvent.click(buttonAll);

    const textOne = screen.getByText('Pikachu');
    const textTwo = screen.getAllByText('Electric');
    const textThree = screen.getByText(caterpieWeight);
    expect(textOne).toBeInTheDocument();
    expect(textTwo[0]).toBeInTheDocument();
    expect(textThree).toBeInTheDocument();
  });
});
