/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Pokemon, PokemonUrl, MovesUrl, TypesUrl } from "../interfaces/models";
import axios from "axios";
import { randomNumber, capitalize } from "../utils/utils";
import { usePokemons } from "../contexts/usePokemon";

const api = axios.create();

const url = `https://pokeapi.co/api/v2`;
const config: any = localStorage.getItem('@PokeStore:config');

export default {
    async getPokemonsByType(type: string) : Promise<PokemonUrl[] | []> {
        let pokemons: PokemonUrl[] = [];
        console.log(`${url}/type/${type}`);

        await api.get(`${url}/type/${type}`).then(response => {
            response.data.pokemon.forEach((poke: any) => {
                pokemons.push({
                    id: poke.id,
                    name: capitalize(poke.pokemon.name),
                    url: poke.pokemon.url,
                });
            })
        })

        return pokemons;
    },
    async getPokemonByUrl(url: string): Promise<Pokemon> {
        var pokemon: Pokemon = {id: '',name: '',img: '',price: '', types: [], height: '', moves: []};

        await api.get(url).then(response => {
            pokemon = {
                id: response.data.id, 
                name: capitalize(response.data.name), 
                img: !response.data.sprites.other.dream_world.front_default ?
                response.data.sprites.front_default : response.data.sprites.other.dream_world.front_default,
                price: randomNumber(),
                height: response.data.height,
                moves: response.data.moves.slice(0, 3).map((r: any) => {
                    return { name: r.move.name, url: r.move.url
                }}),
                types: response.data.types.slice(0, 3).map((r: any) => {
                    return { name: r.type.name, url: r.type.url
                }})
            }
        });

        return pokemon;
    }


}