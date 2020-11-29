import React, {createContext, useEffect, useState, useContext} from 'react';
import { Pokemon } from '../interfaces/models';
import api from '../services/api';
export interface ContextPokemon {
    pokemons: Pokemon[]
}

const AuthContext = createContext<ContextPokemon>({} as ContextPokemon);

const AuthProvider: React.FC = ({children}) => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
      console.log('oii')
      
    const teste = async() => {
        const oi = await api.getPokemonsByType();
        console.log('sa',oi)
        setPokemons(oi);
    }
    teste();
  }, []);

  return (
    <AuthContext.Provider value={{ pokemons: pokemons }}>
      {children}
    </AuthContext.Provider>
  )
};

function useAuth() {
  return useContext(AuthContext);  
}

export {AuthProvider, useAuth, AuthContext};