import React from 'react';
import PokemonCart from '../../components/PokemonCart';

const Pokemons = () => {
    return (
        <>
            {[1,2,3].map(item => <PokemonCart pokemon={item} />)}
        </>
    )
}

export default Pokemons;

