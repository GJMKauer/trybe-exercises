import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testa a página de DoneRecipes da aplicação', () => {
  it('Teste 1 - Testa se tem o título', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/done-recipes');

    const pageHeading = screen.getByText('DoneRecipes Page');
    expect(pageHeading).toBeInTheDocument();
  });
});
