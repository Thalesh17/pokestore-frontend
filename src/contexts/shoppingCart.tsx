import React, { createContext, useState, useContext } from 'react';
import { CartItem, Pokemon, Shopping, ShoppingCart } from '../interfaces/models';
import swal from 'sweetalert';

const ShoppingCartContext = createContext<ShoppingCart>({} as ShoppingCart);

const ShoppingCartProvider: React.FC = ({ children }) => {

  const [cartItems, setCartItems] = useState<CartItem[]>(
  localStorage.getItem("@PokeStore:cart") !== null ? JSON.parse(localStorage.getItem("@PokeStore:cart")!) : []);
  const [shoppings, setShoppings] = useState<Shopping[]>(localStorage.getItem("@PokeStore:shopping") !== null ? JSON.parse(localStorage.getItem("@PokeStore:shopping")!) : [])

  const handleAdd = (pokemon: Pokemon): void => {
    const carts: CartItem[] = cartItems.slice();
    let alreadyInCart = false;

    carts.forEach(item => {
      if (item.id === pokemon.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      carts.push({ ...pokemon, count: 1 });
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

  const handleSaveShopping = (): void => {
        let shoppingsData = shoppings.slice(), 
            randomId = Math.floor(1000 + Math.random() * 9000),
            shopping: Shopping = { id: randomId, createDate: new Date(), items: cartItems };

        shoppingsData.push(shopping);
        setShoppings(shoppingsData);
        localStorage.setItem("@PokeStore:shopping", JSON.stringify(shoppingsData));
        

        swal({
          icon: "success",
          title: `Pedido Nº #${shopping.id}. Sua compra foi realizada com sucesso`,
          text: 'Confira na sua aba de Pedidos.',
          timer: 2000
        });

        handleRemoveAllItems();
  }

  return (
    <ShoppingCartContext.Provider value={{
      cartItems,
      shoppings,
      handleAdd,
      handleRemove,
      handleRemoveAllItems,
      handleSaveShopping
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

function useCart() {
  return useContext(ShoppingCartContext);
}

export { ShoppingCartProvider, useCart, ShoppingCartContext };