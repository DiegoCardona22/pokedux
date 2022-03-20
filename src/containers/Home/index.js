import React, { useEffect } from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import './styles.css';  
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../../actions';
import LoaderComponent from '../../Loader';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.get('list')).toJS();
  const loading = useSelector((state) => state.get('loading'));

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <div className='Home'>
      <Searcher />
      {loading && <LoaderComponent />}
      <PokemonList pokemones={pokemons} />
    </div>
  );
}

export default Home;
