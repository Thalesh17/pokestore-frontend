import React from 'react';
import { PokemonProps } from '../../interfaces/models';
import "./styles.css";
import { Button } from 'react-bootstrap';

const PokemonCart: React.FC<PokemonProps> = ({ pokemon }) => {
    return (
            <li key={String(pokemon)}>
                <div className="pokemon_item">
                    <a href="#">
                        <img
                            className="shelf-item__thumb"
                            // src={require(`../../../../static/products/${product.sku}_1.jpg`)}
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                        />
                        <p className="shelf-item__title">Pokemon nome</p>
                    </a>
                </div>
                <div className="pokemon_item_price">
                    <div className="pokemon_price_cart">
                    <small>R$</small>
                    <b>20,00</b>
                    <Button variant="primary" className="button primary">Adicionar no carrinho</Button>
                    </div>
                </div>
            </li>
    )
}

export default PokemonCart;