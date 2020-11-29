import React from 'react';
import { PokemonProps } from '../../interfaces/models';
import "./styles.css";

const PokemonCart: React.FC<PokemonProps> = ({ pokemon }) => {
    return (
            <div className="pokemon_item">
                <div className="card_image">
                    <img
                        className=""
                        alt="item"
                        src={pokemon.img}
                    />                        
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        <a href="#" title="Pokemon Name">{pokemon.name}</a>
                    </h5>
                    <div className="pokemon_cart">
                        <h5 className="pokemon_price">R$ 200,00</h5>
                        <a href="#" className="btn btn-primary btn-sm btn-block">Comprar</a>
                    </div>
                </div>
            </div>
    )
}

export default PokemonCart;