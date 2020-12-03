import React from 'react';
import {render, fireEvent, act, waitFor } from '@testing-library/react';
import { PokemonContext, PokemonProvider } from '../../contexts/usePokemon';
import { ContextPokemon, Pokemon, PokemonUrl } from '../../interfaces/models';
import { configTypeWater } from '../../utils/utils';
import { ShoppingCartContext, ShoppingCartProvider } from '../../contexts/shoppingCart';
import ShoppingCart from '../../pages/ShoppingCart';
import api from '../../services/api';

const findPokemons = async(): Promise<PokemonUrl[]> => {
    let teste: PokemonUrl[] = await [{id: 'teste',url: 'teste',name: 'thales' }];
    return teste;
}

const getContextValues = (): ContextPokemon => {
    return  {
        config: configTypeWater(),
        findPokemons: () => findPokemons(),
        getConfig: () => configTypeWater(),
        pokemons: [{id: 'teste',url: 'teste',name: 'thales' }],
        getConfigs: () => [configTypeWater()],
        handleSaveConfig: () => {}
    }
}

describe('Component Pokemon Cart', () => {
    beforeEach(() => {
           const data: any = [{id: '1',name: 'Teste',url: 'teste-thales'}];
           const data2: Pokemon = {
               name: 'Squirtle',
               id: '1',
               height: '1',
               types: [],
               weight: '',
               img:'1',
               price:'12',
               moves:[]
           };
       
           jest.spyOn(api, 'getPokemonsByType').mockReturnValue(Promise.resolve(data));
           jest.spyOn(api, 'getPokemonByUrl').mockReturnValue(Promise.resolve(data2));
    })
    it('should insert item in Shopping Cart', async() => {
        const insertPokemon: Pokemon = {
            name: 'Insert pokemon',
            id: '13',
            height: '1',
            types: [],
            weight: '',
            img:'1',
            price:'12',
            moves:[]
        }

        const { getByText } = render(
            <ShoppingCartProvider>
                <PokemonProvider>
                    <ShoppingCartContext.Consumer>
                        {
                            value => (
                                <>
                                    <div>{value.cartItems.map(r=> <div key={r.id}>{r.name}</div>)}</div>
                                    <button 
                                        onClick={() => value.handleAdd(insertPokemon)}>
                                        AddPokemon
                                    </button>
                                </>
                            )
                        }
                    </ShoppingCartContext.Consumer>
                </PokemonProvider>
            </ShoppingCartProvider>
        );

        fireEvent.click(getByText("AddPokemon"))
        await waitFor(() => {
            expect(getByText("Insert pokemon")).toBeInTheDocument();
        })
    });

    it('should insert Pokemon and verify test-id name', async () => {
        const insertPokemon: Pokemon = {
            name: 'Insert pokemon',
            id: '13',
            height: '1',
            types: [],
            weight: '',
            img:'1',
            price:'12',
            moves:[]
        }
        const { getByTestId, getByText } = render(
            <ShoppingCartProvider>
                <PokemonContext.Provider value={getContextValues()}>
                <PokemonProvider>
                    <ShoppingCartContext.Consumer>
                        {
                            value => (
                                <>
                                    <ShoppingCart />
                                    <button 
                                        onClick={() => value.handleAdd(insertPokemon)}>
                                        AddPokemon
                                    </button>
                                </>
                            )
                        }
                    </ShoppingCartContext.Consumer>
                </PokemonProvider>
                </PokemonContext.Provider>
            </ShoppingCartProvider>
        );

        await waitFor(() => {
            fireEvent.click(getByText("AddPokemon"))
            act(() => {
                expect(getByTestId("li-cart-item-13")).toBeInTheDocument();
            })
        })
    });
})