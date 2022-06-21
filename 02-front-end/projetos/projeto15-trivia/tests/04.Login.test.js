import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

const mock = {
  response_code: "0",
  results: [
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "Who did Steven Gerrard win the Champions League with?",
      correct_answer: "Liverpool",
      incorrect_answers: ["Real Madrid", "Chelsea", "Man City"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "&quot;Stadium of Light&quot; is the home stadium for which soccer team?",
      correct_answer: "Sunderland FC",
      incorrect_answers: ["Barcelona FC", "Paris Saint-Germain", "Manchester United"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "Which country will host the 2022 FIFA World Cup?",
      correct_answer: "Qatar",
      incorrect_answers: ["USA", "Japan", "Switzerland"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "Who won the UEFA Champions League in 2017?",
      correct_answer: "Real Madrid C.F.",
      incorrect_answers: ["Atletico Madrid", "AS Monaco FC", "Juventus F.C."],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
      correct_answer: "1-7",
      incorrect_answers: ["1-5", "1-6", "2-6"],
    },
  ],
};

describe('Testa a página de Login da aplicação', () => {
  it('Teste 1 - Testa se existem os inputs de e-mail e nickname', () => {
    renderWithRouterAndRedux(<App />);
    const name = screen.getByRole('textbox', {name: 'Name'});
    expect(name).toBeInTheDocument();
      
    const email = screen.getByRole('textbox', {name: 'E-mail'});
    expect(email).toBeInTheDocument();
  });

  it('Teste 2 - Será validado se é possível escrever o nome e e-mail da pessoa jogadora', () => {
    renderWithRouterAndRedux(<App />);

    const name = screen.getByRole('textbox', {name: 'Name'});
    expect(name).toBeInTheDocument();
    
    const email = screen.getByRole('textbox', {name: 'E-mail'});
    expect(email).toBeInTheDocument();
    
    userEvent.type(name, 'Alguém Fulano');
    userEvent.type(email, 'alguem@alguem.com');

    expect(name.value).toBe('Alguém Fulano');
    expect(email.value).toBe('alguem@alguem.com');
  });

  it('Teste 3 - Será validado se o botão "Play" está desabilitado quando a pessoa jogadora não preencher nenhum campo', () => {
    renderWithRouterAndRedux(<App />);

    const playButton = screen.getByRole('button', { name: 'Play' });
    expect(playButton).toBeInTheDocument();
    expect(playButton).toBeDisabled();
  });

  it('Teste 4 - Será validado se o botão "Play" está desabilitado quando a pessoa jogadora escrever apenas o nome', () => {
    renderWithRouterAndRedux(<App />);

    const name = screen.getByRole('textbox', {name: 'Name'});
    expect(name).toBeInTheDocument();
    
    const email = screen.getByRole('textbox', {name: 'E-mail'});
    expect(email).toBeInTheDocument();

    const playButton = screen.getByRole('button', { name: 'Play' });
    expect(playButton).toBeInTheDocument();

    userEvent.type(name, 'Alguém Fulano');
    expect(playButton).toBeDisabled();
  });
  
  it('Teste 5 - Será validado se o botão "Play" está desabilitado quando a pessoa jogadora escrever apenas o email', () => {
    renderWithRouterAndRedux(<App />);

    const name = screen.getByRole('textbox', {name: 'Name'});
    expect(name).toBeInTheDocument();
    
    const email = screen.getByRole('textbox', {name: 'E-mail'});
    expect(email).toBeInTheDocument();

    const playButton = screen.getByRole('button', { name: 'Play' });
    expect(playButton).toBeInTheDocument();

    userEvent.type(email, 'alguem@alguem.com');
    expect(playButton).toBeDisabled();
  });

  it('Teste 6 - Será validado se o botão "Play" está habilitado quando a pessoa jogadora preencher os campos de nome e email', () => {
    renderWithRouterAndRedux(<App />);

    const name = screen.getByRole('textbox', {name: 'Name'});
    expect(name).toBeInTheDocument();
    
    const email = screen.getByRole('textbox', {name: 'E-mail'});
    expect(email).toBeInTheDocument();

    const playButton = screen.getByRole('button', { name: 'Play' });
    expect(playButton).toBeInTheDocument();

    userEvent.type(name, 'Alguem Fulano');
    userEvent.type(email, 'alguem@alguem.com');
    expect(playButton).not.toBeDisabled();
  });

  it('Teste 7 - Será validado se ao clicar no botão "Play" o jogo é iniciado salvando um token de jogador e redirecionando para a tela de jogo', () => {
    localStorage.setItem('token', 'b2baa1cc61b5a832bb238183dad830bdf330ebb05c07f4559b50bca5d95c7095');

    renderWithRouterAndRedux(<App />, {
      tokenReducer: { token: 'b2baa1cc61b5a832bb238183dad830bdf330ebb05c07f4559b50bca5d95c7095' },
      configurationReducer: {
        configuration: {
          category: '21',
          difficulty: 'easy',
          type: 'multiple',
        }
      },
      player: {
        name: 'Teste',
        gravatarEmail: 'teste@trybe.com',
        score: 0,
        assertions: 0,
      },
      questionsReducer: {
        results: {
          response_code: 0,
          results: mock.results,
        },
      },
    });

    const tokenResponse = {
      "response_code":0,
      "response_message":"Token Generated Successfully!",
      "token":"f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6",
    };

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(tokenResponse.token),
    }));

    const name = screen.getByRole('textbox', {name: 'Name'});
    expect(name).toBeInTheDocument();
    
    const email = screen.getByRole('textbox', {name: 'E-mail'});
    expect(email).toBeInTheDocument();

    const playButton = screen.getByRole('button', { name: 'Play' });
    expect(playButton).toBeInTheDocument();

    userEvent.type(name, 'Alguem Fulano');
    userEvent.type(email, 'alguem@alguem.com');

    userEvent.click(playButton);
    expect(global.fetch).toBeCalledTimes(1);

    jest.restoreAllMocks();
  });

  it('Teste 8 - Será validado se o botão de Configurações existe na página', () => {
    renderWithRouterAndRedux(<App />);

    const configButton = screen.getByRole('button', {name: 'Configurations'});
    expect(configButton).toBeInTheDocument();
    expect(configButton).toHaveTextContent('Configurations');
  });

  it('Teste 9 - Será validado se a tela de configurações possui um título', () => {
    renderWithRouterAndRedux(<App />);

    const configButton = screen.getByRole('button', {name: 'Configurations'});
    expect(configButton).toBeInTheDocument();

    userEvent.click(configButton);

    const pageHeader = screen.getByRole('heading', {name: 'Game Configurations', level: 1});
    expect(pageHeader).toBeInTheDocument();
  });

  it('Teste 10 - Testa a tela de Jogo quando ainda não recebeu o retorno da API', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/game');

    const loading = screen.getByText('Loading questions...');
    expect(loading).toBeInTheDocument();
  })
});
