import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const PokeSearch = () => {
    const [searchValue, setSearchValue] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const [pokemonNames, setPokemonNames] = useState<string[]>([]);

    // useEffect to hit pokeapi on render and get a list of all pokemon names to populate the autocomplete options
    useEffect(() => {
        const fetchPokemonNames = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000');
                const data = await response.json();
                const pokemonNames = data.results.map((pokemon: { name: string }) => pokemon.name);
                setPokemonNames(pokemonNames);
            } catch (error) {
                console.error('Failed to fetch Pokémon names:', error);
            }
        };
        fetchPokemonNames();
    }, []);

  return (
    <Autocomplete
      id="poke-search"
      options={pokemonNames}
      value={searchValue}
      onChange={(event, newValue) => setSearchValue(newValue)}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      renderInput={(params) => <TextField {...params} label="Pokémon Search" />}
    />
  )
};

export default PokeSearch;