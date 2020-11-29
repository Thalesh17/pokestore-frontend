import React, {useState, useEffect} from 'react';
import { Spinner } from 'react-bootstrap';
import { usePokemons } from '../../contexts/usePokemon';
import { Pokemon, PokemonProps } from '../../interfaces/models';
import api from '../../services/api';
import { numberFormatBRL } from '../../utils/utils';
import "./styles.css";

const PokemonCart: React.FC<PokemonProps> = ({ pokemon }) => {
    const { config } = usePokemons();
    const [ pokemonData, setPokemonData ] = useState<Pokemon | null>(null);

    useEffect(() => {
        const getPokemonByUrl = async(url : string) => {
            let data = await api.getPokemonByUrl(url);
            setPokemonData(data);
        }
        
        getPokemonByUrl(pokemon.url);
    }, [pokemon]);

    return (
        <>
            {!pokemonData && <Spinner className="spinner-load" animation="border" variant="primary" />}
            {pokemonData && (
                <div className="pokemon_item">
                    <div className="card_image">
                        <img
                            alt="item"
                            src={pokemonData.img}
                        />                        
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            <a href="#" title="Pokemon Name">{pokemonData.name}</a>
                        </h5>
                        <div className="pokemon_cart">
                            <h5 className="pokemon_price">
                            { pokemonData.price && numberFormatBRL(parseFloat(pokemonData.price))}</h5>
                            <a href="#" className={`btn btn-${config.color} btn-sm btn-block`}>Comprar</a>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PokemonCart;