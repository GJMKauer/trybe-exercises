import { USER_TOKEN } from '../actions/login';

const INITIAL_STATE = {
  token: '',
};

function tokenReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_TOKEN:
    return {
      ...state,
      token: action.payload.token,
    };
  default:
    return state;
  }
}

export default tokenReducer;
