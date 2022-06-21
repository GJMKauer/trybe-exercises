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

describe('Testa a página "Configurations" da aplicação', () => {
  it('Teste 1 - Testa se o usuário consegue alterar as configurações do retorno da API conforme personalização própria, se consegue retornar para a tela de login após aplicar as configurações e se as configurações são mantidas ao iniciar o jogo', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock),
    });

    localStorage.setItem('token', 'b2baa1cc61b5a832bb238183dad830bdf330ebb05c07f4559b50bca5d95c7095');
    
    const { history } = renderWithRouterAndRedux(<App />, {
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
    }, '/config');

    const configurationHeader = screen.getByRole('heading', { name: 'Game Configurations' });
    expect(configurationHeader).toBeInTheDocument();

    const goToHomeButton = screen.getByRole('button', { name: 'Finish Configuration' });
    expect(goToHomeButton).toBeInTheDocument();

    userEvent.click(goToHomeButton);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');

    history.push('/config');

    const getCategory = screen.getByRole('option', { name: 'Any Category' } ).selected;
    expect(getCategory).toBe(true);

    const getDifficulty = screen.getByRole('option', { name: 'Any Difficulty' } ).selected;
    expect(getDifficulty).toBe(true);

    const getType = screen.getByRole('option', { name: 'Any Type' }).selected;
    expect(getType).toBe(true);

    userEvent.selectOptions(
      screen.getAllByRole('combobox')[0], screen.getByRole('option', { name: 'Sports' }),
    );

    userEvent.selectOptions(
      screen.getAllByRole('combobox')[1], screen.getByRole('option', { name: 'Easy' }),
    );

    userEvent.selectOptions(
      screen.getAllByRole('combobox')[2], screen.getByRole('option', { name: 'Multiple Choice' }),
    );

    userEvent.click(goToHomeButton);
    history.push('/');
    history.push('/game');

    const headerCategory = await screen.findByText('Sports');
    expect(headerCategory).toBeInTheDocument();

    let timer = screen.getByText('Timer: 30');
    expect(timer).toBeInTheDocument();

    const correctButtonFirstQuestion = screen.getByRole('button', { name: 'Liverpool' });
    expect(correctButtonFirstQuestion).toBeInTheDocument();

    userEvent.click(correctButtonFirstQuestion);
    expect(timer).toHaveTextContent('Timer: 30');
    
    let playerScore = screen.getByText(40);
    expect(playerScore).toBeInTheDocument();

    const nextQuestionOne = screen.getByRole('button', { name: 'Next question' });
    expect(nextQuestionOne).toBeInTheDocument();

    userEvent.click(nextQuestionOne);

    const correctButtonSecondQuestion = screen.getByRole('button', { name: 'Sunderland FC' });
    expect(correctButtonSecondQuestion).toBeInTheDocument();

    userEvent.click(correctButtonSecondQuestion);
    
    const nextQuestionTwo = screen.getByRole('button', { name: 'Next question' });
    userEvent.click(nextQuestionTwo);

    playerScore = screen.getByText(80);
    expect(playerScore).toBeInTheDocument();

    const correctButtonThirdQuestion = screen.getByRole('button', { name: 'Qatar' });
    expect(correctButtonThirdQuestion).toBeInTheDocument();

    userEvent.click(correctButtonThirdQuestion);
    
    const nextQuestionThree = screen.getByRole('button', { name: 'Next question' });
    userEvent.click(nextQuestionThree);

    playerScore = screen.getByText(120);
    expect(playerScore).toBeInTheDocument();

    const incorrectButtonFourthQuestion = screen.getByRole('button', { name: 'Atletico Madrid' });
    expect(incorrectButtonFourthQuestion).toBeInTheDocument();

    userEvent.click(incorrectButtonFourthQuestion);
    
    const nextQuestionFour = screen.getByRole('button', { name: 'Next question' });
    userEvent.click(nextQuestionFour);

    playerScore = screen.getByText(120);
    expect(playerScore).toBeInTheDocument();

    const correctButtonFifthQuestion = screen.getByRole('button', { name: '1-7' });
    expect(correctButtonFifthQuestion).toBeInTheDocument();

    userEvent.click(correctButtonFifthQuestion);

    playerScore = screen.getByText(160);
    expect(playerScore).toBeInTheDocument();
    
    const lastQuestion = screen.getByRole('button', { name: 'Finish game' });

    userEvent.click(lastQuestion);

    const { location: { pathname: newPathname } } = history;
    expect(newPathname).toBe('/feedback');

    jest.restoreAllMocks();
  });
});
