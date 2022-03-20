import { Grid } from 'semantic-ui-react';
import PokemonCard from './PokemonCard';
import "./styles.css";

const PokemonList = ( { pokemones } ) => {
  return (
    <Grid className="PokemonList">
      {pokemones.map((pokemon, index) => (
        <PokemonCard key={`Pokemon-${index}`} pokemon={pokemon} />
      ))}
    </Grid>
  )
}

PokemonList.defaultProps = {
  pokemones: []
}

export default PokemonList