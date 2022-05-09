import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);

    const navOne = screen.getByRole('link', { name: 'Home' });
    const navTwo = screen.getByRole('link', { name: 'About' });
    const navThree = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(navOne).toBeInTheDocument();
    expect(navTwo).toBeInTheDocument();
    expect(navThree).toBeInTheDocument();
  });

  it(`Teste se a aplicação é redirecionada para a página inicial,
  na URL "/" ao clicar no link "Home" da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);

    const navOne = screen.getByRole('link', { name: 'Home' });
    expect(navOne).toBeInTheDocument();

    userEvent.click(navOne);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');

    const hHome = screen.getByRole('heading', { name: 'Encountered pokémons', level: 2 });
    expect(hHome).toBeInTheDocument();
  });

  it(`Teste se a aplicação é redirecionada para a página de "About",
  na URL "/about", ao clicar no link "About" da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);

    const navTwo = screen.getByRole('link', { name: 'About' });
    expect(navTwo).toBeInTheDocument();

    userEvent.click(navTwo);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');

    const hAbout = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    expect(hAbout).toBeInTheDocument();
  });

  it(`Teste se a aplicação é redirecinada para a página de "Pokémons Favoritados", na
  URL "/favorites", ao clicar no link "Favorite Pokémons" da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);

    const navThree = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(navThree).toBeInTheDocument();

    userEvent.click(navThree);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');

    const hFav = screen.getByRole('heading', { name: 'Favorite pokémons', level: 2 });
    expect(hFav).toBeInTheDocument();
  });

  it(`Teste se a aplicação é redirecionada para a página "Not Found",
  ao entrar em uma URL desconhecida`, () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pagina-que-nao-existe');

    const { location: { pathname } } = history;
    expect(pathname).toBe('/pagina-que-nao-existe');
  });
});
