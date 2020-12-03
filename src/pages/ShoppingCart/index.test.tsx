import React from 'react';
import {render, fireEvent, getByTestId, act, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import Pokemons from '.';
import { PokemonContext } from '../../contexts/usePokemon';
import { ContextPokemon, Pokemon, PokemonUrl, ShoppingCart as ShoppingModel } from '../../interfaces/models';
import { configTypeWater } from '../../utils/utils';
import api from '../../services/api';
import ShoppingCart from '../ShoppingCart';
import { ShoppingCartContext, useCart } from '../../contexts/shoppingCart';

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
    const pokemon: Pokemon = {
        id: '13',
        name: 'Teste Add Shopping', 
        img:'',
        price:'200,00',
        moves: [],
        types:[],
        weight: '',
        height:'12'
    };
    return  {
        cartItems: [{id: '13',price:'200,00',img:'',name:'Teste Add Shopping',count:2, 
        pokemon: {
            id: '13',
            name: 'Teste Add Shopping', 
            img:'',
            price:'200,00',
            moves: [],
            weight: '',
            types:[],
            height:'12'
        }
        }],
        handleAdd: (pokemon) => {jest.fn().mockReturnValue(pokemon)},
        handleRemove: () => {},
        handleRemoveAllItems: () => {},
        handleSaveShopping: () => {},
        shoppings: [],
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
               weight: '',
               img:'1',
               price:'12',
               moves:[]
           };
       
           jest.spyOn(api, 'getPokemonsByType').mockReturnValue(Promise.resolve(data));
           jest.spyOn(api, 'getPokemonByUrl').mockReturnValue(Promise.resolve(data2));
    })

    it('insert item in Shopping Cart', async() => {
        const { container, getAllByText, getByTestId } = render(
            <ShoppingCartContext.Provider value={getContextShopValue()}>
                <PokemonContext.Provider value={getContextValues()}>
                    <ShoppingCart />
                </PokemonContext.Provider>
            </ShoppingCartContext.Provider>
        );

        const button = getByTestId('btn-add-pokemon');

        await waitFor(() => {
            expect(getByTestId("li-cart-item-13")).toBeInTheDocument();
        });
    });

})