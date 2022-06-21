import { combineReducers } from 'redux';
import tokenReducer from './login';
import player from './player';
import questionsReducer from './questions';
import configurationReducer from './configurations';

const rootReducer = combineReducers(
  { tokenReducer, player, questionsReducer, configurationReducer },
);

export default rootReducer;
