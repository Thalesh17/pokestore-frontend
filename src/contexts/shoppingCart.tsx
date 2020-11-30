import React, {createContext, useEffect, useState, useContext} from 'react';
import { Cart, CartItem, Config, Pokemon, ShoppingCart } from '../interfaces/models';
import api from '../services/api';

const ShoppingCartContext = createContext<ShoppingCart>({} as ShoppingCart);

const ShoppingCartProvider: React.FC = ({children}) => {

  const [cartItems, setCartItems] = useState<CartItem[]>(
    localStorage.getItem("@PokeStore:cart") !== null ? JSON.parse(localStorage.getItem("@PokeStore:cart")!) : []);

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
    localStorage.setItem("@PokeStore:cart", JSON.stringify(carts));
  }
  
  const handleRemove = (id: string): void => {
    const carts: CartItem[] = cartItems.slice().filter(cart => cart.id !== id);
    setCartItems(carts);
    localStorage.setItem("@PokeStore:cart", JSON.stringify(carts));
  }
  const handleRemoveAllItems = (): void => {
    setCartItems([]);
    localStorage.removeItem("@PokeStore:cart");
  }

  return (
    <ShoppingCartContext.Provider value={{
      cartItems,
      handleAdd, 
      handleRemove,
      handleRemoveAllItems
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

function useCart() {
  return useContext(ShoppingCartContext);  
}

export {ShoppingCartProvider, useCart, ShoppingCartContext};