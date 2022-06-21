import { GET_QUESTIONS } from './questions';

export const GAME_CONFIGURATION = 'GAME_CONFIGURATION';

export const gameConfigurationAction = (category, difficulty, type) => ({
  type: GAME_CONFIGURATION,
  payload: { category, difficulty, type },
});

const userTokenAction = (questions) => ({
  type: GET_QUESTIONS,
  payload: { questions },
});

export const configuredQuestionsThunk = (category, difficulty, type) => {
  const key = localStorage.getItem('token');
  const FETCH_URL = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=${type}&token=${key}`;
  return async (dispatch) => {
    try {
      const response = await fetch(FETCH_URL);
      const data = await response.json();
      return dispatch(userTokenAction(data));
    } catch (error) {
      return error;
    }
  };
};
