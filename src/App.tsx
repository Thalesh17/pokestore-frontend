import React from 'react';
import Home from './pages/Home';
import "./global.css";
import { PokemonProvider } from './contexts/usePokemon';
import { ShoppingCartProvider } from './contexts/shoppingCart';

const App: React.FC = () => {
  return (
    <PokemonProvider>
      <ShoppingCartProvider>
      <Home />
      </ShoppingCartProvider>
    </PokemonProvider>
  )
}

export default App;
