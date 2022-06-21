import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testa a página de Feedback da aplicação', () => {
  it('Teste 1 - Será validado se a imagem do Gravatar está presente no header', () => {
    renderWithRouterAndRedux(<App />, { player: { name: 'Teste' } }, '/feedback');

    const playerImage = screen.getByRole('img', { name: 'Player Avatar' });
    expect(playerImage).toBeInTheDocument();
  });

  it('Teste 2 - Será validado se o nome da pessoa está presente no header', () => {
    renderWithRouterAndRedux(<App />, { player: { name: 'Teste' } }, '/feedback');

    const playerName = screen.getByRole('heading', { name: 'Teste' });
    expect(playerName).toBeInTheDocument();
  });

  it('Teste 3 - Será validado se o placar com o valor atual está presente no header', () => {
    renderWithRouterAndRedux(<App />, { player: { score: 120 } }, '/feedback' );

    const playerScore = screen.getAllByText(120);
    expect(playerScore[0]).toBeInTheDocument();
  });

  it('Teste 4 - Será validado se ao acertar menos de 3 perguntas a mensagem de "feedback" é "Could be better..."', () => {
    renderWithRouterAndRedux(<App />, { player: { assertions: 1 } }, '/feedback');

    const headerMessage = screen.getByRole('heading', { name: 'Could be better...' });
    expect(headerMessage).toBeInTheDocument();
  });

  it('Teste 5 - Será validado se ao acertar 3 perguntas a mensagem de "feedback" é "Well Done!"', () => {
    renderWithRouterAndRedux(<App />, { player: { assertions: 3 } }, '/feedback');

    const headerMessage = screen.getByRole('heading', { name: 'Well Done!' });
    expect(headerMessage).toBeInTheDocument();
  });

  it('Teste 6 - Será validado se ao acertar mais de 3 perguntas a mensagem de "feedback" é "Well Done"', () => {
    renderWithRouterAndRedux(<App />, { player: { assertions: 4 } }, '/feedback');

    const headerMessage = screen.getByRole('heading', { name: 'Well Done!' });
    expect(headerMessage).toBeInTheDocument();
  });

  it('Teste 7 - Será validado se o número exibido é correto quando a pessoa usuária não acerta nenhuma pergunta', () => {
    renderWithRouterAndRedux(<App />, { player: { assertions: 0 } }, '/feedback');

    const playerAssertions = screen.getByText(0);
    expect(playerAssertions).toBeInTheDocument();
  });

  it('Teste 8 - Será validado se o número exibido é correto quando a pessoa usuária acerta 2 perguntas', () => {
    renderWithRouterAndRedux(<App />, { player: { assertions: 2 } }, '/feedback');

    const playerAssertions = screen.getByText(2);
    expect(playerAssertions).toBeInTheDocument();
  });

  it('Teste 9 - Será validado se o número exibido é correto quando a pessoa usuária acerta 4 perguntas', () => {
    renderWithRouterAndRedux(<App />, { player: { assertions: 4 } }, '/feedback');

    const playerAssertions = screen.getByText(4);
    expect(playerAssertions).toBeInTheDocument();
  });

  it('Teste 10 - Será validado se a pessoa é redirecionada para a tela inicial ao clicar no botão "Play Again"', () => {
    const { history } = renderWithRouterAndRedux(<App />, { player: { assertions: 0 } }, '/feedback');

    const playAgain = screen.getByRole('button', { name: 'Play Again' });
    expect(playAgain).toBeInTheDocument();

    userEvent.click(playAgain);
    
    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  it('Teste 11 - Será validado se ao clicar no botão "Ranking" a pessoa é direcionada para a tela de ranking', () => {
    const { history } = renderWithRouterAndRedux(<App />, { player: { assertions: 0 } }, '/feedback');

    const playAgain = screen.getByRole('button', { name: 'Ranking' });
    expect(playAgain).toBeInTheDocument();

    userEvent.click(playAgain);
    
    const { location: { pathname } } = history;
    expect(pathname).toBe('/ranking');
  });
});
