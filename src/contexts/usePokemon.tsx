import React, {createContext, useEffect, useState, useContext} from 'react';
import { Config, ContextPokemon, PokemonUrl } from '../interfaces/models';
import api from '../services/api';
import { useCart } from './shoppingCart';

const PokemonContext = createContext<ContextPokemon>({} as ContextPokemon);

const PokemonProvider: React.FC = ({children}) => {
  const { handleRemoveAllItems } = useCart();

  const [ pokemons, setPokemons ] = useState<PokemonUrl[] | []>([]);
  const [ refreshData, setRefreshData] = useState<boolean>(false);
  const [ config, setConfig ] = useState<Config>({ 
    color: 'primary', 
    type: '11', 
    name: 'Water',
    value: 'water'
  });

  useEffect(() => { 
    const getPokemonsByType = async() => {
      setPokemons([]);
      let configStore = localStorage.getItem('@PokeStore:config');

      if(configStore) {
        setConfig(JSON.parse(configStore));
      }else{
        setConfigDefault();
      }
      await findPokemons();
    }

    getPokemonsByType();
  }, [refreshData]);

  const findPokemons = async (): Promise<PokemonUrl[]> => {
    let pokemons = await api.getPokemonsByType(config.type);
    setPokemons(pokemons);
    return pokemons;
  }

  const setConfigDefault = (): void => {
    handleSaveConfig({color: 'primary', name: 'water',type: '11',value:'11'})
  }

  const handleSaveConfig = async(values: Config): Promise<void> => {
    localStorage.setItem('@PokeStore:config', JSON.stringify(values));
    setConfig(values);
    setRefreshData(true);
    setPokemons([]);
    handleRemoveAllItems();
    setPokemons(await api.getPokemonsByType(values.type));
  }

  const getConfigs = (): Config[] => {
    return [
      {
        color: 'primary',name:'Water',value:'water',type:'11'
      },
      {
        color: 'danger',name:'Fire',value:'fire',type:'10'
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

export {PokemonProvider, usePokemons, PokemonContext};