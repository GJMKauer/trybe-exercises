import { GAME_CONFIGURATION } from '../actions/configurations';

const INITIAL_STATE = {
  configuration: {
    category: '',
    difficulty: '',
    type: '',
  },
};

function configurationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GAME_CONFIGURATION:
    return {
      ...state,
      configuration: {
        category: action.payload.category,
        difficulty: action.payload.difficulty,
        type: action.payload.type,
      },
    };
  default:
    return state;
  }
}

export default configurationReducer;
