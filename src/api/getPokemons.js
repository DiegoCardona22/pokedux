import axios from "../services/axios";

export const getPokemons = ( limit = 150 ) => 
  axios.get(`/pokemon?limit=${limit}`)
    .then(response => response.data)
    .catch(error => console.log(error));

export const getPokemonsWithDetails = () => {
  return getPokemons()
  .then(response => {
    const pokemonsList = response.results;
    return Promise.all(pokemonsList.map(pokemon => axios.get(pokemon.url)));
  })
  .then(pokemonsResponse => {
    const pokemonsData = pokemonsResponse.map(pokemon => pokemon.data);
    return pokemonsData;
  });
}