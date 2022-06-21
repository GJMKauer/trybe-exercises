export const USER_TOKEN = 'USER_TOKEN';

const userTokenAction = (token) => ({
  type: USER_TOKEN,
  payload: { token },
});

export const userTokenThunk = () => {
  const FETCH_URL = 'https://opentdb.com/api_token.php?command=request';
  return async (dispatch) => {
    try {
      const response = await fetch(FETCH_URL);
      const data = await response.json();
      return dispatch(userTokenAction(data.token));
    } catch (error) {
      return error;
    }
  };
};
