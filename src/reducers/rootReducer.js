import { combineReducers } from 'redux-immutable';
import pokemonReducer from './pokemonReducer';
import uiReducer from './ui';

const rootReducer = combineReducers({
  list: pokemonReducer,
  loading: uiReducer,
});

export default rootReducer;
