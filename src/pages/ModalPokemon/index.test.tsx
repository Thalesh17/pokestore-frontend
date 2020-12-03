import React from 'react';
import {act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Main from '.';
import Routes from '../../components/Routes';
import ModalPokemon from '.';
import {Pokemon} from '../../interfaces/models';
import { PokemonProvider } from '../../contexts/usePokemon';
import api from '../../services/api';

describe('Modal', () => { 
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
    it('should Open Modal', async () => {
        let open = true;
        const pokemon: Pokemon = {
            name: 'Modal pokemon',
            id: '13',
            height: '1',
            types: [],
            weight: '',
            img:'1',
            price:'12',
            moves:[]
        };
        render(
            <PokemonProvider>
                <ModalPokemon pokemon={pokemon} isOpen={true} closeModal={() => open = false}/>
            </PokemonProvider>

        )

        await waitFor(() => {
            expect(screen.getByText('Modal pokemon')).toBeInTheDocument();
        });
    });
    it('should Close Modal', async () => {
        let open = true;
        const pokemon: Pokemon = {
            name: 'Modal pokemon',
            id: '13',
            height: '1',
            types: [],
            weight: '',
            img:'1',
            price:'12',
            moves:[]
        };
        render(
            <PokemonProvider>
                <ModalPokemon pokemon={pokemon} isOpen={true} closeModal={() => open = false}/>
                <button onClick={() => open = false}>Close Modal</button>
            </PokemonProvider>

        )

        fireEvent.click(screen.getByText("Close Modal"))
        await waitFor(() => {
            act(() => {
                expect(open).toEqual(false);
            })
        })
    });
})