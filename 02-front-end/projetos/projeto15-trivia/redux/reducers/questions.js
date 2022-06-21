import { GET_QUESTIONS } from '../actions/questions';

const INITIAL_STATE = {
  results: {},
};

function questionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_QUESTIONS:
    return {
      ...state,
      results: {
        response_code: action.payload.questions.response_code,
        results: action.payload.questions.results,
      },
    };
  default:
    return state;
  }
}

export default questionsReducer;
