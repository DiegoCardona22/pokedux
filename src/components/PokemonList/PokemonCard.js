import { Grid, Icon, Image, Label, Button } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { setFavoritePokemon } from "../../actions";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  if (!pokemon) return null;

  const color = pokemon.favorite ? FAV_COLOR : MAIN_COLOR;

  const handleFavorite = () => {
    dispatch(setFavoritePokemon({ pokemonId: pokemon.id }));
  };

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <Button className="PokemonCard-favorite" onClick={handleFavorite}>
          <Icon name="favorite" color={color} />
        </Button>
        <Image centered src={pokemon?.sprites?.front_default} alt="Pokemon"/>
        <p className="PokemonCard-title">{pokemon?.name}</p>
        {pokemon?.types?.map((type) => (
          <Label key={`${pokemon?.id}-${type.type.name}`} color={MAIN_COLOR}>
            {type.type.name} 
          </Label>
        ))}
      </div>
    </Grid.Column>
  )
}

export default PokemonCard
