import React from 'react';
import { PokemonProps } from '../../interfaces/models';
import "./styles.css";

const PokemonCart: React.FC<PokemonProps> = ({ pokemon }) => {
    return (
        <div>
            <div className="pokemon_item">
                <img
                    className="shelf-item__thumb"
                    // src={require(`../../../../static/products/${product.sku}_1.jpg`)}
                />
                <p className="shelf-item__title">TITULO TESTE</p>
                <div className="shelf-item__price">
                    <div className="val">
                    <small>R$</small>
                    <b>20,00</b>
                    {/* <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span> */}
                    </div>
                </div>
                <div className="shelf-item__buy-btn">Adicionar no carrinho</div>
            </div>
        </div>
    )
}

export default PokemonCart;