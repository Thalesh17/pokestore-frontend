import React from 'react';
import {fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ShoppingCartContext } from '../../contexts/shoppingCart';
import Shopping from '.';
import { ContextPokemon, Pokemon, PokemonUrl, ShoppingCart } from '../../interfaces/models';
import { configTypeFire } from '../../utils/utils';
import api from '../../services/api';
import { PokemonContext } from '../../contexts/usePokemon';
import { BrowserRouter } from 'react-router-dom';

const getContextShopValue = (): ShoppingCart => {
    return  {
        cartItems: [{id: '12',price:'12,00',img:'img',name:'Squirtle',count:2, 
        pokemon: {
            id: '1',
            name: 'Teste', 
            img:'',
            price:'',
            weight: '',
            moves: [],
            types:[],
            height:'12'
        }
        }],
        handleAdd: () => {},
        handleRemove: () => {},
        handleRemoveAllItems: () => {},
        handleSaveShopping: () => {},
        shoppings: [],
    }
}
const findPokemons = async(): Promise<PokemonUrl[]> => {
    let teste: PokemonUrl[] = await [{id: 'teste',url: 'teste',name: 'thales' }];
    return teste;
}

const getContextPokemonValues = (): ContextPokemon => {
    return  {
        config: configTypeFire(),
        findPokemons: () => findPokemons(),
        getConfig: () => configTypeFire(),
        pokemons: [{id: 'teste',url: 'teste',name: 'thales' }],
        getConfigs: () => [configTypeFire()],
        handleSaveConfig: () => {}
    }
}
describe('Component Shopping', () => {
    beforeEach(() => {
        const data: any = [{id: '1',name: 'Teste',url: 'teste-thales'}];
           const data2: Pokemon = {
               name: 'Squirtle',
               id: '1',
               height: '1',
               types: [],
               img:'1',
               weight: '',
               price:'12',
               moves:[]
           };
       
           jest.spyOn(api, 'getPokemonsByType').mockReturnValue(Promise.resolve(data));
           jest.spyOn(api, 'getPokemonByUrl').mockReturnValue(Promise.resolve(data2));
    })
    it('should show list', async() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(),
              removeListener: jest.fn(),
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
        render(
            <ShoppingCartContext.Provider value={getContextShopValue()}>
                <PokemonContext.Provider value={getContextPokemonValues()}>
                <BrowserRouter>
                
                 <ShoppingCartContext.Consumer>
                        {
                            value => (
                                <>
                                    <Shopping />
                                    <button 
                                        onClick={() => value.handleAdd( {
                                            id: '1',
                                            name: 'Teste', 
                                            img:'',
                                            price:'',
                                            weight: '',
                                            moves: [],
                                            types:[],
                                            height:'12'
                                        })}>
                                        AddPokemon
                                    </button>
                                </>
                            )
                        }
                    </ShoppingCartContext.Consumer>
                </BrowserRouter>
                </PokemonContext.Provider>
            </ShoppingCartContext.Provider>
        )

        
        fireEvent.click(screen.getByText("AddPokemon"));
        await waitFor(() => {
            expect(screen.getByText('Fogo')).toBeInTheDocument();
        })
      
    });
})
