import { fromJS } from 'immutable';

const initialState = fromJS ({
  list: []
})

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return state.set('list', fromJS(action.payload));
    case 'FAVORITE_POKEMON':
      const currentPokemonIndex = state
        .get('list')
        .findIndex(pokemon => pokemon.get('id') === action.payload.pokemonId);
      const isFavorite = state.getIn(['list', currentPokemonIndex, 'favorite']);
      return state.setIn([ 'list', currentPokemonIndex, 'favorite' ], !isFavorite);
    default:
      return state;
  }
};

export default pokemonReducer;