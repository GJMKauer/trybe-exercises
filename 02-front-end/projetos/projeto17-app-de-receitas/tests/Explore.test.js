import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testa a página de Explore da aplicação', () => {
  it('Teste 1 - Testa se tem o título', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/explore');

    const pageHeading = screen.getByText('Explore Page');
    expect(pageHeading).toBeInTheDocument();
  });
});
