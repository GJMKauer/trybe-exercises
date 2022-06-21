import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testa a página de Ranking da aplicação', () => {
  it('Teste 1 - Será validado se ao clicar no botão de "Voltar ao Início", a pessoa volta para a tela inicial', () => {
    const { history } = renderWithRouterAndRedux(<App />, { player: { name: 'Teste' } }, '/ranking');

    const homeButton = screen.getByRole('button', { name: 'Play Again' });
    expect(homeButton).toBeInTheDocument();

    userEvent.click(homeButton);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  it('Teste 2 - Será validado se existe uma pessoa no "Ranking"', () => {
    const playerOne = [
      {
        name: 'Teste',
        gravatarEmail: 'teste@trybe.com',
        score: 150,
        assertions: 2,
      }
    ];

    localStorage.setItem('ranking', JSON.stringify(playerOne));

    renderWithRouterAndRedux(<App />, { player: { name: 'Teste' } }, '/ranking');
    
    const playerOneName = screen.getByText('Teste');
    expect(playerOneName).toBeInTheDocument();

    localStorage.clear();
  });

  it('Teste 3 - Será validado se existem duas pessoas no "Ranking"', () => {
    const players = [
      {
        name: 'Teste',
        gravatarEmail: 'teste@trybe.com',
        score: 150,
        assertions: 2,
      },
      {
        name: 'TesteTwo',
        gravatarEmail: 'teste_two@trybe.com',
        score: 217,
        assertions: 4,
      }
    ];

    localStorage.setItem('ranking', JSON.stringify(players));

    renderWithRouterAndRedux(<App />, { player: { name: 'Teste' } }, '/ranking');
    
    const playerOneName = screen.getByText('Teste');
    const playerOneScore = screen.getByText(150);
    expect(playerOneName).toBeInTheDocument();
    expect(playerOneScore).toBeInTheDocument();

    const playerTwoName = screen.getByText('TesteTwo');
    const playerTwoScore = screen.getByText(217);
    expect(playerTwoName).toBeInTheDocument();
    expect(playerTwoScore).toBeInTheDocument();

    expect(JSON.parse(localStorage.getItem('ranking'))).toHaveLength(2);
    localStorage.clear();
  });

  it('Teste 4 - Será validado se o "Ranking" é ordenado pela pontuação', () => {
    const players = [
      {
        name: 'Teste',
        gravatarEmail: 'teste@trybe.com',
        score: 150,
        assertions: 2,
      },
      {
        name: 'TesteTwo',
        gravatarEmail: 'teste_two@trybe.com',
        score: 217,
        assertions: 4,
      },
      {
        name: 'TesteTwo',
        gravatarEmail: 'teste_two@trybe.com',
        score: 180,
        assertions: 3,
      }
    ];

    localStorage.setItem('ranking', JSON.stringify(players));

    renderWithRouterAndRedux(<App />, { player: { name: 'Teste' } }, '/ranking');

    const rankingOne = screen.getByTestId('player-score-0');
    const rankingTwo = screen.getByTestId('player-score-1');
    const rankingThree = screen.getByTestId('player-score-2');

    expect(rankingOne).toHaveTextContent(217);
    expect(rankingTwo).toHaveTextContent(180);
    expect(rankingThree).toHaveTextContent(150);
  });
});
