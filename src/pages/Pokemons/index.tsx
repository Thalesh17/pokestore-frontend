import React, { useState, useEffect } from 'react';
import FilterPokemons from '../../components/FilterPokemons';
import PokemonCart from '../../components/PokemonCart';
import { usePokemons } from '../../contexts/usePokemon';
import { PokemonUrl } from '../../interfaces/models';
import "./styles.css";

const Pokemons: React.FC = () => {
    const { pokemons } = usePokemons();
    const [ pokemonsFilters, setPokemonsFilters ] = useState<PokemonUrl[]>([]);

    useEffect(() => {
        setPokemonsFilters(pokemons);
    }, [pokemons]);

    const renderPokemonCart = () => {
        return pokemonsFilters.map((item: PokemonUrl) => <li key={item.id}><PokemonCart key={item.id} pokemon={item} /></li>)
    }

    const handleFilter = (value: string): void => {
        setPokemonsFilters(pokemons.filter(pokemon => pokemon.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
        console.log(pokemons.filter(pokemon => pokemon.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
    }

    return (
        <div className="main">
            <div>
                <FilterPokemons 
                    handleFilter={handleFilter} 
                    countResult={pokemonsFilters.length} 
                />
                <ul className="pokemon_items">
                    {renderPokemonCart()}
                </ul>
            </div>
        </div>
    )
}

export default Pokemons;

