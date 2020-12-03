import React from 'react';
import "./global.css";
import { PokemonProvider } from './contexts/usePokemon';
import { ShoppingCartProvider } from './contexts/shoppingCart';
import Routes from './components/Routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
      <ShoppingCartProvider>
          <GlobalStyle />
          <PokemonProvider>
            <Routes />
          </PokemonProvider>
      </ShoppingCartProvider>
  )
}

export default App;
