export const CHANGE_INFO = 'CHANGE_INFO';

export const player = (name, email) => ({
  type: CHANGE_INFO,
  payload: { name, email },
});

export const GET_ASSERTIONS = 'GET_ASSERTIONS';

export const getAssertions = (assertions) => ({
  type: GET_ASSERTIONS,
  payload: { assertions },
});

export const GET_SCORE = 'GET_SCORE';

export const getScore = (score) => ({
  type: GET_SCORE,
  payload: { score },
});
