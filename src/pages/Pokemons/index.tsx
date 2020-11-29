import React, { useState, useEffect } from 'react';
import PokemonCart from '../../components/PokemonCart';
import { usePokemons } from '../../contexts/usePokemon';
import { PokemonUrl } from '../../interfaces/models';
import api from '../../services/api';
import "./styles.css";

const Pokemons: React.FC = () => {
    const { pokemons } = usePokemons();

    const renderPokemonCart = () => {
        return (pokemons as PokemonUrl[]).map((item: PokemonUrl) => <li key={item.id}><PokemonCart pokemon={item} /></li>)
    }

    return (
        <div className="main">
            <div>
                <ul className="pokemon_items">
                    {renderPokemonCart()}
                </ul>
            </div>
        </div>
    )
}

export default Pokemons;

