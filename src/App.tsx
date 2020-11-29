import React from 'react';
import Home from './pages/Home';
import "./global.css";
import { PokemonProvider } from './contexts/usePokemon';

const App: React.FC = () => {
  return (
    <PokemonProvider>
      <Home />
    </PokemonProvider>
  )
}

export default App;
