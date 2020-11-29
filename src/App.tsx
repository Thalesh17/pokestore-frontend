import React from 'react';
import Home from './pages/Home';
import "./global.css";
import { AuthProvider } from './contexts/usePokemon';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  )
}

export default App;
