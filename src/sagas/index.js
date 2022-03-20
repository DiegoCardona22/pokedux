import { call, put, takeEvery } from 'redux-saga/effects';
import { setPokemons, toggleLoader } from '../actions';
import { getPokemonsWithDetails } from '../api/getPokemons';
import { FETCH_POKEMONS } from '../actions/types';

function* fetchPokemonWithDetails(action) {
  try {
    yield put(toggleLoader());
    const pokemonsWithDetails = yield call(getPokemonsWithDetails);
    yield put(setPokemons(pokemonsWithDetails));
    yield put(toggleLoader());
  } catch (error) {
    console.log(error);
  }
} 

function* pokemonSaga() {
  yield takeEvery(FETCH_POKEMONS, fetchPokemonWithDetails);
}

export default pokemonSaga;