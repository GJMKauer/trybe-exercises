import { CHANGE_INFO, GET_ASSERTIONS, GET_SCORE } from '../actions/player';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  score: 0,
  assertions: 0,
};

function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_INFO:
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.email,
    };
  case GET_ASSERTIONS:
    return {
      ...state,
      assertions: action.payload.assertions,
    };
  case GET_SCORE:
    return {
      ...state,
      score: action.payload.score,
    };
  default:
    return state;
  }
}

export default player;
