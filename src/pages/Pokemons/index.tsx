import React, { useState, useEffect } from 'react';
import PokemonCart from '../../components/PokemonCart';
import { useAuth } from '../../contexts/usePokemon';
import { Pokemon, PokemonProps, ArrayPokemonProps } from '../../interfaces/models';
import api from '../../services/api';
import "./styles.css";

const Pokemons: React.FC = () => {
    const { pokemons } = useAuth();
    const renderPokemonCart = () => {
        return pokemons.map(item => {
            return <li><PokemonCart pokemon={item} /></li>
        })
    }

    return (
        <div className="main">
            Products
            <div>
                <ul className="pokemon_items">
                    {renderPokemonCart()}
                </ul>
            </div>
        </div>
    )
}

export default Pokemons;

