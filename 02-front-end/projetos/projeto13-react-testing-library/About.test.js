import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

describe('Teste o componente <About.js />', () => {
  it('Teste se a página contém as informações sobre a Pokédex.', () => {
    const { history } = renderWithRouter(<App />);

    const navTwo = screen.getByRole('link', { name: 'About' });
    expect(navTwo).toBeInTheDocument();

    userEvent.click(navTwo);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });

  it('Teste se página contém um heading "h2" com o texto "About Pokédex"', () => {
    renderWithRouter(<App />);

    const navTwo = screen.getByRole('link', { name: 'About' });
    expect(navTwo).toBeInTheDocument();

    userEvent.click(navTwo);

    const hAbout = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    expect(hAbout).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex"', () => {
    renderWithRouter(<App />);

    const navTwo = screen.getByRole('link', { name: 'About' });
    expect(navTwo).toBeInTheDocument();

    userEvent.click(navTwo);

    const textOne = /This application simulates/i;
    const textTwo = /One can filter Pokémons by type/i;
    const paragraphOne = screen.getByText(textOne);
    const paragraphTwo = screen.getByText(textTwo);

    expect(paragraphOne).toBeInTheDocument();
    expect(paragraphTwo).toBeInTheDocument();
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png', () => {
    renderWithRouter(<App />);

    const navTwo = screen.getByRole('link', { name: 'About' });
    expect(navTwo).toBeInTheDocument();

    userEvent.click(navTwo);

    const imgURL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    const hImg = screen.getByRole('img');
    expect(hImg).toBeInTheDocument();
    expect(hImg).toHaveAttribute('src', imgURL); // estava tentando utilizar getByRole('img', { src: link }), mas não deu certo. Peguei a dica de usar o toHaveAttribute no StackOverflow: https://stackoverflow.com/questions/60509527/jestreact-native-testing-library-how-to-test-an-image-src.
  });
});
