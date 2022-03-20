import { fromJS } from 'immutable';

const initialState = fromJS ({
  error: '',
  loading: false
})

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return state.set('error', action.payload);
    case 'TOGGLE_LOADING':
      return state.set('loading', !state.get('loading'));
    default:
      return state;
  }
};

export default uiReducer;