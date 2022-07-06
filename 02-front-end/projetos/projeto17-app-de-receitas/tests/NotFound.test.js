import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testa a página de NotFound da aplicação', () => {
  it('Teste 1 - Testa se tem o título', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/NotFound');

    const pageHeading = screen.getByText('The page you are looking for does not exist.');
    expect(pageHeading).toBeInTheDocument();
  });
});
