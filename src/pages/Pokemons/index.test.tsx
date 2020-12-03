import React from 'react';
import {render, fireEvent, getByTestId, act, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import Pokemons from '.';
import { PokemonContext } from '../../contexts/usePokemon';
import { ContextPokemon, Pokemon, PokemonUrl, ShoppingCart as ShoppingModel } from '../../interfaces/models';
import { configTypeWater } from '../../utils/utils';
import api from '../../services/api';
import ShoppingCart from '../ShoppingCart';
import { ShoppingCartContext } from '../../contexts/shoppingCart';

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
const getContextShopValue = (): ShoppingModel => {
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

describe('Component Pokemons List', () => {
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

    it('insert item in Shopping Cart', async() => {
        const { getByTestId } = render(
            <ShoppingCartContext.Provider value={getContextShopValue()}>
                <PokemonContext.Provider value={getContextValues()}>
                    <Pokemons />
                    <ShoppingCart />
                </PokemonContext.Provider>
            </ShoppingCartContext.Provider>
        );

        const button = getByTestId('add-pokemon');

        fireEvent.click(button);

        await waitFor(() => {
            expect(getByTestId("li-cart-item-12")).toBeInTheDocument();
        });
    });

    it('should find data-test-id Squirtle', async () => {
            
            const { getByTestId } = render(
                <PokemonContext.Provider value={getContextValues()}>
                    <Pokemons />
                </PokemonContext.Provider>
            );

            await waitFor(() => {
                expect(getByTestId('Squirtle')).toBeInTheDocument();
            });
    });
})