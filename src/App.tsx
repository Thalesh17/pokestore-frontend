import React from 'react';
import Home from './pages/Home';
import "./global.css";
import { PokemonProvider } from './contexts/usePokemon';
import { ShoppingCartProvider } from './contexts/shoppingCart';
import Routes from './components/Routes';

const App: React.FC = () => {
  return (
    <ShoppingCartProvider>
        <PokemonProvider>
          <Routes />
        </PokemonProvider>
    </ShoppingCartProvider>
  )
}

export default App;
