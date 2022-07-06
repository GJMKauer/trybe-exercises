import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import { validEmail, validPassword, invalidEmail, invalidPassword } from './helpers';
import App from '../App';

describe('Testa a página de Login da aplicação', () => {
  it('Teste 1- Testa se tem os inputs de email e senha, e o botão de fazer login', () => {
    renderWithRouter(<App />);

    const emailInput = screen.getByRole('textbox', { name: 'E-mail' });
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: 'Login' });
    expect(submitButton).toBeInTheDocument();
  });

  it('Teste 2 - Testa se é possível digitar o e-mail e a senha e validar o botão', () => {
    renderWithRouter(<App />);

    const emailInput = screen.getByRole('textbox', { name: 'E-mail' });
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Login' });

    expect(submitButton).toBeDisabled();

    userEvent.type(emailInput, invalidEmail);
    userEvent.type(passwordInput, invalidPassword);

    expect(submitButton).toBeDisabled();

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);

    expect(emailInput.value).toBe(validEmail);
    expect(passwordInput.value).toBe(validPassword);
    expect(submitButton).not.toBeDisabled();
  });

  it(`Teste 3 - Testa se são salvos os tokens e e-mail no localStorage
  e é feito o redirecionamento`, () => {
    const { history } = renderWithRouter(<App />);

    const emailInput = screen.getByRole('textbox', { name: 'E-mail' });
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Login' });

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);

    expect(emailInput.value).toBe(validEmail);
    expect(passwordInput.value).toBe(validPassword);

    userEvent.click(submitButton);

    expect(JSON.parse(localStorage.getItem('mealsToken'))).toBe(1);
    expect(JSON.parse(localStorage.getItem('cocktailsToken'))).toBe(1);
    expect(JSON.parse(localStorage.getItem('user'))).toStrictEqual({ email: validEmail });

    const { location: { pathname } } = history;
    expect(pathname).toBe('/foods');
  });
});
