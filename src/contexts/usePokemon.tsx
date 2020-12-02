import React, { createContext, useEffect, useState, useContext } from 'react';
import { Config, ContextPokemon, PokemonUrl } from '../interfaces/models';
import api from '../services/api';
import { useCart } from './shoppingCart';

const PokemonContext = createContext<ContextPokemon>({} as ContextPokemon);

const PokemonProvider: React.FC = ({ children }) => {
  const { handleRemoveAllItems } = useCart();

  const [pokemons, setPokemons] = useState<PokemonUrl[] | []>([]);
  const [refreshData, setRefreshData] = useState<boolean>(false);
  const [config, setConfig] = useState<Config>(localStorage.getItem('@PokeStore:config') ?
    JSON.parse(localStorage.getItem('@PokeStore:config') || '{}') : {
      color: 'type-water',
      type: '11',
      name: 'Water',
      value: 'water'
    });

  useEffect(() => {
    const getPokemonsByType = async () => {
      await findPokemons();
    }

    getPokemonsByType();
  }, [refreshData]);

  const findPokemons = async (): Promise<PokemonUrl[]> => {
    let pokemons = await api.getPokemonsByType(config.type);
    setPokemons(pokemons);
    return pokemons;
  }
  
  const handleSaveConfig = async (values: Config): Promise<void> => {
    setConfig(values);
    localStorage.setItem('@PokeStore:config', JSON.stringify(values));
    setRefreshData(true);
    setPokemons([]);
    handleRemoveAllItems();
    setPokemons(await api.getPokemonsByType(values.type));
  }

  const getConfigs = (): Config[] => {
    return [
      {
        color: {
          primary: 'type-water',
          secondary: 'type-water-secondary'
        },
        name: 'Água',
        value: 'water',
        type: '11'
      },
      {
        color: {
          primary: 'type-fire',
          secondary: 'type-fire-secondary'
        },
        name: 'Fogo',
        value: 'fire',
        type: '10'
      }
    ];
  }
  const getConfig = (): Config => {
    return config;
  }

  return (
    <PokemonContext.Provider value={{
      pokemons: pokemons,
      config: config,
      findPokemons,
      getConfigs,
      getConfig,
      handleSaveConfig
    }}>
      {children}
    </PokemonContext.Provider>
  )
};

function usePokemons() {
  return useContext(PokemonContext);
}

export { PokemonProvider, usePokemons, PokemonContext };