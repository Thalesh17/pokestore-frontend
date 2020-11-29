import React, {createContext, useEffect, useState, useContext} from 'react';
import { Cart, CartItem, Config, Pokemon, ShoppingCart } from '../interfaces/models';
import api from '../services/api';

const ShoppingCartContext = createContext<ShoppingCart>({} as ShoppingCart);

const ShoppingCartProvider: React.FC = ({children}) => {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<string>();
  const [config, setConfig] = useState<Config>();

  const handleAdd = (pokemon: Pokemon): void => {
    const carts: CartItem[] = cartItems.slice();
    let alreadyInCart = false;

    carts.forEach(item => {
        if(item.id === pokemon.id) {
          item.count++; 
          alreadyInCart = true;
        }
    });
    if(!alreadyInCart) {
      carts.push({...pokemon, count: 1});
    }
    setCartItems(carts);
  }
  
  const handleRemove = (id: string): void => {
    const carts: CartItem[] = cartItems.slice();
    setCartItems(carts.filter(cart => cart.id !== id));
  }

  return (
    <ShoppingCartContext.Provider value={{
      cartItems,
      handleAdd, 
      handleRemove
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

function useCart() {
  return useContext(ShoppingCartContext);  
}

export {ShoppingCartProvider, useCart, ShoppingCartContext};