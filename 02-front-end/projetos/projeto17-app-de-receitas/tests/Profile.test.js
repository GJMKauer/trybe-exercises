import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import { validEmail, validPassword } from './helpers';
import App from '../App';

describe('Testa a página de Profile da aplicação', () => {
  it('Teste 1 - Testa se tem o título', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/profile');

    const pageHeading = screen.getByText('Profile Page');
    expect(pageHeading).toBeInTheDocument();
  });

  it('Teste 2 - Testa se o localStorage é limpo após o logout ', () => {
    const { history } = renderWithRouter(<App />);

    const emailInput = screen.getByRole('textbox', { name: 'E-mail' });
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Login' });

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);

    expect(emailInput.value).toBe(validEmail);
    expect(passwordInput.value).toBe(validPassword);

    userEvent.click(submitButton);

    history.push('/profile');

    expect(JSON.parse(localStorage.getItem('user'))).toStrictEqual({ email: validEmail });

    const logoutButton = screen.getByRole('button', { name: 'Logout' });
    expect(logoutButton).toBeInTheDocument();

    userEvent.click(logoutButton);

    expect(JSON.parse(localStorage.getItem('user'))).toBe(null);
  });
});
