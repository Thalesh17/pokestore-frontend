import React, {createContext, useEffect, useState, useContext} from 'react';
import { Cart, Config, ShoppingCart } from '../interfaces/models';
import api from '../services/api';

const ShoppingCartContext = createContext<ShoppingCart>({} as ShoppingCart);

const ShoppingCartProvider: React.FC = ({children}) => {

  const [cart, setCart] = useState<Cart[]>([]);
  const [total, setTotal] = useState<string>();
  const [config, setConfig] = useState<Config>();

  const handleAdd = async(): Promise<void> => {

  }
  
  const handleRemove = (id: string): void => {

  }

  return (
    <ShoppingCartContext.Provider value={{handleAdd, handleRemove}}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

function useCart() {
  return useContext(ShoppingCartContext);  
}

export {ShoppingCartProvider, useCart, ShoppingCartContext};