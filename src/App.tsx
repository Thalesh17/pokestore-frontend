import React from 'react';
import Home from './pages/Home';
import "./global.css";
import { PokemonProvider } from './contexts/usePokemon';
import { ShoppingCartProvider } from './contexts/shoppingCart';

const App: React.FC = () => {
  return (
    <ShoppingCartProvider>
        <PokemonProvider>
          <Home />
        </PokemonProvider>
    </ShoppingCartProvider>
  )
}

export default App;
