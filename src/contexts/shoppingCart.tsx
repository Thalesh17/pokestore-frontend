import React, { createContext, useState, useContext } from 'react';
import { CartItem, Pokemon, Shopping, ShoppingCart } from '../interfaces/models';
import swal from 'sweetalert';

const ShoppingCartContext = createContext<ShoppingCart>({} as ShoppingCart);

const ShoppingCartProvider: React.FC = ({ children }) => {

  const [cartItems, setCartItems] = useState<CartItem[]>(
    localStorage.getItem("@PokeStore:cart") !== null ? JSON.parse(localStorage.getItem("@PokeStore:cart")!) : []);
  const [shoppings] = useState<Shopping[]>(localStorage.getItem("@PokeStore:shopping") !== null ? JSON.parse(localStorage.getItem("@PokeStore:shopping")!) : [])

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
    swal("Digite seu nome completo", {
      buttons: ["Cancelar", "Finalizar Compra"],
      content: {
        element: 'input',
        attributes: {
          placeholder: 'Digite seu nome aqui!',
          type: 'text',
          value: ``
        }
      },
      closeOnClickOutside: true,
      closeOnEsc: true
    })
      .then((name) => {
        if (!name) {
          swal('Ops', 'É necessário digitar seu nome.', 'error');
          throw 'erro';
        }

        let shoppingsData = shoppings.slice(), 
            shopping: Shopping = { name: name, createDate: new Date(), items: cartItems };

        shoppingsData.push(shopping);

        localStorage.setItem("@PokeStore:shopping", JSON.stringify(shoppingsData));

        swal({
          icon: "success",
          title: `${shopping.name}, sua compra foi realizada com sucesso`,
          text: 'Confira na sua aba Compras.',
          timer: 2000
        });
        handleRemoveAllItems();
      }).catch(err => { });
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