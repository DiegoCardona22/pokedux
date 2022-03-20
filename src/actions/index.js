import { SET_POKEMONS, FETCH_POKEMONS, TOGGLE_LOADING, FAVORITE_POKEMON } from "./types";

export const setPokemons = ( payload ) => ({
  type: SET_POKEMONS,
  payload
});

export const toggleLoader = ( ) => ({ type: TOGGLE_LOADING });

export const setFavoritePokemon = ( payload ) => ({
  type: FAVORITE_POKEMON,
  payload
});

export const fetchPokemons = ( ) => ({ type: FETCH_POKEMONS });

