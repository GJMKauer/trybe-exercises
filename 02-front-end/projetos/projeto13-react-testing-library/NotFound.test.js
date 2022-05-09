import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

const notFoundPage = '/pagina-que-nao-existe';

describe('Teste o componente <NotFound.js />', () => {
  it(`Teste se a página contém um heading "h2"
  com o texto "Page requested not found 😭"`, () => {
    const { history } = renderWithRouter(<App />);
    history.push(notFoundPage);

    const { location: { pathname } } = history;
    expect(pathname).toBe(notFoundPage);

    const notFoundText = screen.getByText('Page requested not found');
    expect(notFoundText).toBeInTheDocument();

    const notFoundSpan = screen.getByText('😭');
    expect(notFoundSpan).toBeInTheDocument();
  });

  it(`Teste se página mostra a imagem
  "https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"`, () => {
    const { history } = renderWithRouter(<App />);
    history.push(notFoundPage);

    const { location: { pathname } } = history;
    expect(pathname).toBe(notFoundPage);

    const notFoundImgURL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const notFoundImg = screen.getAllByRole('img');
    expect(notFoundImg[1]).toBeInTheDocument();
    expect(notFoundImg[1]).toHaveAttribute('src', notFoundImgURL);
  });
});
