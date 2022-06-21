import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testa a página de "Erro 404" da aplicação', () => {
  it('Teste 1 - Testa se a página tem um Header de erro', () => {
    renderWithRouterAndRedux(<App />, {
      player: {
        name: 'Teste'
      }
    }, '/not-found');

    const errorHeader = screen.getByRole('heading', { name: 'Oops! Something went wrong', level: 1 });
    expect(errorHeader).toBeInTheDocument();
  });

  it('Teste 2 - Testa se a página tem uma imagem de erro', () => {
    renderWithRouterAndRedux(<App />, { player: { name: 'Teste' } }, '/not-found');

    const errorImage = screen.getByRole('img', { name: 'Error'});
    expect(errorImage).toBeInTheDocument();
    expect(errorImage).toHaveAttribute('src');
    expect(errorImage.src).toBe('https://neilpatel.com/wp-content/uploads/2019/05/ilustracao-sobre-o-error-404-not-found.jpeg');
  });

  it('Teste 3 - Testa se o botão de "Voltar ao Início" leva o usuário para a página de login', () => {
  const { history } = renderWithRouterAndRedux(<App />, { player: { name: 'Teste' } }, '/not-found');

  const homeButton = screen.getByRole('button', { name: 'Return to home page' });
  expect(homeButton).toBeInTheDocument();

  userEvent.click(homeButton);

  const { location: { pathname } } = history;
  expect(pathname).toBe('/');
  });
});
