import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

const mock = {
  response_code: "0",
  results: [
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "easy",
      question: "In the Nintendo DS game &#039;Ghost Trick: Phantom Detective&#039;, what is the name of the hitman seen at the start of the game?",
      correct_answer: "Nearsighted Jeego",
      incorrect_answers: ["One Step Ahead Tengo", "Missile", "Cabanela"],
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "easy",
      question: "In &quot;Super Mario 64&quot;, collecting 100 coins on a level will give you a 1-UP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "What is the smallest country in South America by area?",
      correct_answer: "Suriname",
      incorrect_answers: ["Brazil", "Uruguay", "Chile"],
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "medium",
      question: "In &quot;League of Legends&quot;, there exists four different types of Dragon.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "hard",
      question: "Who is credited with having created the world&#039;s first video game Easter Egg?",
      correct_answer: "Warren Robinett",
      incorrect_answers: ["Julius Smith", "Will Crowther", "Don Woods"],
    },
  ],
};

describe('Testa o componente de "TriviaCard" da aplicação', () => {
  it('Teste 1 - Testa se a página redireciona o usuário para a tela de login ao receber um erro da API', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock),
    });

    localStorage.setItem('token', 'b2baa1cc61b5a832bb238183dad830bdf330ebb05c07f4559b50bca5d95c7095');
    
    const { history } = renderWithRouterAndRedux(<App />, {
      tokenReducer: { token: 'b2baa1cc61b5a832bb238183dad830bdf330ebb05c07f4559b50bca5d95c7095' },
      player: {
        name: 'Teste',
        gravatarEmail: 'teste@trybe.com',
        score: 0,
        assertions: 0,
      },
      questionsReducer: { results: { response_code: 3, results: mock.results } },
    });
    
    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    const emailInput = screen.getByRole('textbox', { name: 'E-mail' });
    userEvent.type(nameInput, 'Testador');
    userEvent.type(emailInput, 'testador@trybe.com');

    const playButton = screen.getByRole('button', { name: 'Play' });
    userEvent.click(playButton);

    history.push('/game');
    expect(global.fetch).toBeCalledTimes(1);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');

    jest.restoreAllMocks();
  });

  it('Teste 2 - Testa se o usuário recebe pontuação ao clicar na opção certa, se não recebe pontuação ao responder a opção incorreta e se consegue finalizar o jogo ao responder 5 perguntas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock),
    });

    localStorage.setItem('token', 'b2baa1cc61b5a832bb238183dad830bdf330ebb05c07f4559b50bca5d95c7095');
    
    const { history } = renderWithRouterAndRedux(<App />, {
      tokenReducer: { token: 'b2baa1cc61b5a832bb238183dad830bdf330ebb05c07f4559b50bca5d95c7095' },
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
      configurationReducer: {
        configuration: {
          category: '',
          difficulty: '',
          type: '',
        },
      },
    });
    
    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    const emailInput = screen.getByRole('textbox', { name: 'E-mail' });
    userEvent.type(nameInput, 'Testador');
    userEvent.type(emailInput, 'testador@trybe.com');

    const playButton = screen.getByRole('button', { name: 'Play' });
    userEvent.click(playButton);

    history.push('/game');

    expect(global.fetch).toBeCalledWith('https://opentdb.com/api_token.php?command=request');
    expect(global.fetch).toBeCalledTimes(1);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/game');

    const headerCategory = await screen.findByText('Entertainment: Video Games');
    expect(headerCategory).toBeInTheDocument();

    let timer = screen.getByText('Timer: 30');
    expect(timer).toBeInTheDocument();

    const correctButtonFirstQuestion = screen.getByRole('button', { name: 'Nearsighted Jeego' });
    expect(correctButtonFirstQuestion).toBeInTheDocument();

    userEvent.click(correctButtonFirstQuestion);
    expect(timer).toHaveTextContent('Timer: 30');
    
    let playerScore = screen.getByText(40);
    expect(playerScore).toBeInTheDocument();

    const nextQuestionOne = screen.getByRole('button', { name: 'Next question' });
    expect(nextQuestionOne).toBeInTheDocument();

    userEvent.click(nextQuestionOne);

    const correctButtonSecondQuestion = screen.getByRole('button', { name: 'False' });
    expect(correctButtonSecondQuestion).toBeInTheDocument();

    userEvent.click(correctButtonSecondQuestion);
    
    const nextQuestionTwo = screen.getByRole('button', { name: 'Next question' });
    userEvent.click(nextQuestionTwo);

    playerScore = screen.getByText(80);
    expect(playerScore).toBeInTheDocument();

    const correctButtonThirdQuestion = screen.getByRole('button', { name: 'Suriname' });
    expect(correctButtonThirdQuestion).toBeInTheDocument();

    userEvent.click(correctButtonThirdQuestion);
    
    const nextQuestionThree = screen.getByRole('button', { name: 'Next question' });
    userEvent.click(nextQuestionThree);

    playerScore = screen.getByText(150);
    expect(playerScore).toBeInTheDocument();

    const incorrectButtonFourthQuestion = screen.getByRole('button', { name: 'True' });
    expect(incorrectButtonFourthQuestion).toBeInTheDocument();

    userEvent.click(incorrectButtonFourthQuestion);
    
    const nextQuestionFour = screen.getByRole('button', { name: 'Next question' });
    userEvent.click(nextQuestionFour);

    playerScore = screen.getByText(150);
    expect(playerScore).toBeInTheDocument();

    const correctButtonFifthQuestion = screen.getByRole('button', { name: 'Warren Robinett' });
    expect(correctButtonFifthQuestion).toBeInTheDocument();

    userEvent.click(correctButtonFifthQuestion);

    playerScore = screen.getByText(250);
    expect(playerScore).toBeInTheDocument();
    
    const lastQuestion = screen.getByRole('button', { name: 'Finish game' });

    userEvent.click(lastQuestion);

    const { location: { pathname: newPathname } } = history;
    expect(newPathname).toBe('/feedback');

    jest.restoreAllMocks();
  });

  it('Teste 3 - Testa se o usuário consegue responder a pergunta após 2 segundos', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock),
    });

    localStorage.setItem('token', 'b2baa1cc61b5a832bb238183dad830bdf330ebb05c07f4559b50bca5d95c7095');
    
    const { history } = renderWithRouterAndRedux(<App />, {
      tokenReducer: { token: 'b2baa1cc61b5a832bb238183dad830bdf330ebb05c07f4559b50bca5d95c7095' },
      player: {
        name: 'Teste',
        gravatarEmail: 'teste@trybe.com',
        score: 0,
        assertions: 0,
      },
      questionsReducer: { results: { response_code: 0, results: mock.results } },
    });
    
    history.push('/game');

    const headerCategory = await screen.findByText('Entertainment: Video Games');
    expect(headerCategory).toBeInTheDocument();
    const correctButtonFirstQuestion = screen.getByRole('button', { name: "Nearsighted Jeego"});
    expect(correctButtonFirstQuestion).toBeInTheDocument();

    let playerScore = screen.getByText(0);
    let timer = screen.getByText('Timer: 30');
    expect(timer).toBeInTheDocument();

    await waitFor(() => {
      expect(timer).toHaveTextContent('Timer: 28');
      userEvent.click(correctButtonFirstQuestion);
      expect(playerScore).toHaveTextContent(38);
    }, { timeout: 2500 });

    jest.restoreAllMocks();
  });

  it('Teste 4 - Testa se o usuário não consegue responder a pergunta após 30 segundos', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock),
    });

    localStorage.setItem('token', 'b2baa1cc61b5a832bb238183dad830bdf330ebb05c07f4559b50bca5d95c7095');
    
    const { history } = renderWithRouterAndRedux(<App />, {
      tokenReducer: { token: 'b2baa1cc61b5a832bb238183dad830bdf330ebb05c07f4559b50bca5d95c7095' },
      player: {
        name: 'Teste',
        gravatarEmail: 'teste@trybe.com',
        score: 0,
        assertions: 0,
      },
      questionsReducer: { results: { response_code: 0, results: mock.results } },
    });
    
    history.push('/game');
  
    const headerCategory = await screen.findByText('Entertainment: Video Games');
    expect(headerCategory).toBeInTheDocument();
    const correctButtonFirstQuestion = screen.getByRole('button', { name: "Nearsighted Jeego"});
    expect(correctButtonFirstQuestion).toBeInTheDocument();

    let playerScore = screen.getByText(0);
    let timer = screen.getByText('Timer: 30');
    expect(timer).toBeInTheDocument();

    await waitFor(() => {
      expect(timer).toHaveTextContent('Timer: 0');
      expect(correctButtonFirstQuestion).toBeDisabled();
      expect(playerScore).toHaveTextContent(0);
    }, { timeout: 32000 });

    jest.restoreAllMocks();
  }, 40000);
});
