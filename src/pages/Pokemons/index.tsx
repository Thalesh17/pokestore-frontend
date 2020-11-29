import React from 'react';
import PokemonCart from '../../components/PokemonCart';
import "./styles.css";

const Pokemons = () => {
    return (
        <div>
            <ul className="pokemon_items">
                {[1,2,3,4,5,6].map(item => <PokemonCart pokemon={item} />)}
            </ul>
        </div>
    )
}

export default Pokemons;

