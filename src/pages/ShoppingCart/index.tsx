import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/shoppingCart';
import { usePokemons } from '../../contexts/usePokemon';
import { CartItem } from '../../interfaces/models';
import { numberFormatBRL } from '../../utils/utils';
import { Button } from '../../styles/components/components';
import "./styles.css";

const ShoppingCart: React.FC = () => {
    const Fade = require('react-reveal/Fade');
    const { cartItems, handleRemove, handleSaveShopping, handleAdd } = useCart();
    const [cartItemsData, setCartItemsData] = useState<CartItem[]>([]);
    const [open, setOpen] = useState(false);
    const { getConfig } = usePokemons();

    useEffect(() => {
        setCartItemsData(cartItems);
    }, [cartItems]);

    const saveShopping = () => {
        handleSaveShopping();
    }

    const renderCart = () => {
        return (
            <>
                {cartItemsData && cartItemsData.length === 0 ?
                    (<div className="cart cart-header">Carrinho está vazio</div>)
                    :
                    (<div className="cart cart-header">Você tem {cartItemsData && cartItemsData.length} itens no carrinho</div>)
                }
                <div className="cart margin-responsive">
                    <Fade left cascade>
                        <ul className="cart-items">
                            {cartItemsData.map(cartItem => (
                                <li key={cartItem.id}>
                                    <div>
                                        <img src={cartItem.img} alt={cartItem.name} />
                                    </div>
                                    <div className="cart-item-description">
                                        <div className="cart-item-name">{cartItem.name}</div>
                                        <div className="right">
                                            <div>
                                                {numberFormatBRL(parseFloat(cartItem.price))}
                                            </div>
                                            <div className="btn-content">
                                                <button onClick={() => handleRemove(cartItem.id)} className="btn-cart"><span>-</span></button>
                                                <div className="quantity__input">{cartItem.count}</div>
                                                <button onClick={() => handleAdd(cartItem.pokemon)} className="btn-cart"><span>+</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Fade>
                </div>
                {cartItems.length !== 0 && (
                    <div className="cart total-absolute">
                        <div className="total">
                            <div className="total-text">
                                Total: {" "}
                                {numberFormatBRL(cartItems.reduce((a, c) => a + (parseFloat(c.price) * c.count), 0))}
                            </div>
                            <Button
                                className={`${getConfig().color.secondary}`}
                                onClick={saveShopping}
                            >Finalizar</Button>
                        </div>
                    </div>
                )}
            </>
        )
    }

    return (
        <div className="sidebar">
            <div onClick={() => setOpen(!open)} className={`cart-responsive ${open ? 'open' : 'closed'}`}>
                🛒
            </div>
            <div className={`cart-content-responsive ${open ?
                'open' :
                'cart-content-responsive'}`}>
                {open ? renderCart() : ''}
            </div>
            <div className="cart-container">
                {renderCart()}
            </div>
        </div>
    )
}

export default ShoppingCart;

