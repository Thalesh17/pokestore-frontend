import React from 'react';
import "./global.css";
import { PokemonProvider } from './contexts/usePokemon';
import { ShoppingCartProvider } from './contexts/shoppingCart';
import Routes from './components/Routes';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import blue from './styles/themes/blue';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={blue}>
      <ShoppingCartProvider>
          <GlobalStyle />
          <PokemonProvider>
            <Routes />
          </PokemonProvider>
      </ShoppingCartProvider>
    </ThemeProvider>
  )
}

export default App;
