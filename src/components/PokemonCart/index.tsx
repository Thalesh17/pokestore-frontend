import React, {useState, useEffect} from 'react';
import { useCart } from '../../contexts/shoppingCart';
import { usePokemons } from '../../contexts/usePokemon';
import { Pokemon, PokemonProps } from '../../interfaces/models';
import { numberFormatBRL } from '../../utils/utils';
import { Button } from '../../styles/components/components';
import api from '../../services/api';
import "./styles.css";

const PokemonCart: React.FC<PokemonProps> = ({ pokemon }) => {
    const Fade = require('react-reveal/Fade');
    const { config } = usePokemons();
    const { handleAdd, handleRemove } = useCart();
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
            {/* {!pokemonData && <Spinner className="spinner-load" animation="border" variant="primary" />} */}
            {pokemonData && (
                <Fade bottom cascade>
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
                            <Button 
                                onClick={() => handleAdd(pokemonData)}
                                className={`${config.color}`}>Comprar
                            </Button>
                        </div>
                    </div>
                </div>
                </Fade>
            )}
        </>
    )
}

export default PokemonCart;