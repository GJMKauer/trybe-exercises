export const GET_QUESTIONS = 'GET_QUESTIONS';

const userTokenAction = (questions) => ({
  type: GET_QUESTIONS,
  payload: { questions },
});

export const questionsThunk = () => {
  const key = localStorage.getItem('token');
  const FETCH_URL = `https://opentdb.com/api.php?amount=5&token=${key}`;
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
