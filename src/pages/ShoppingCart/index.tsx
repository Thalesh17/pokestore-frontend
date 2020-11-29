import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { useCart } from '../../contexts/shoppingCart';
import { CartItem } from '../../interfaces/models';
import { numberFormatBRL } from '../../utils/utils';
import "./styles.css";

const ShoppingCart: React.FC = () => {
    const { cartItems, handleRemove } = useCart(); 
    const [ cartItemsData, setCartItemsData] = useState<CartItem[]>([]);

    useEffect(() => {
        console.log(cartItems);
        setCartItemsData(cartItems);
    }, [cartItems])

    return (
        <div className="sidebar">
            {cartItemsData && cartItemsData.length === 0 ?
                (<div className="cart cart-header">Carrinho está vazio</div>)
                :
                (<div className="cart cart-header">Você tem {cartItemsData && cartItemsData.length} itens no carrinho</div>)
            }
            <div className="cart">
                <ul className="cart-items">
                    {cartItemsData.map(cartItem => (
                        <li key={cartItem.id}>
                            <div>
                                <img src={cartItem.img} alt={cartItem.name}/>
                            </div>
                            <div className="cart-item-description">
                                <div className="cart-item-name">{cartItem.name}</div> 
                                <div className="right">
                                    {numberFormatBRL(parseFloat(cartItem.price))} X {cartItem.count}
                                    <Button size='sm' variant="danger" className="btn-remove" onClick={() => handleRemove(cartItem.id)}>Remover</Button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {cartItems.length !== 0 && (
                <div className="cart">
                    <div className="total">
                        <div>
                            Total: {" "}
                            {numberFormatBRL(cartItems.reduce((a,c) => a + (parseFloat(c.price) * c.count), 0))}
                        </div>
                        <Button>Finalizar</Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShoppingCart;

