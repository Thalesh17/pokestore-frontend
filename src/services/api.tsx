/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Pokemon, PokemonUrl } from "../interfaces/models";
import axios from "axios";
import { randomNumber, capitalize } from "../utils/utils";
const api = axios.create();

const url = `https://pokeapi.co/api/v2`;

export default {
    async getPokemonsByType(type: string) : Promise<PokemonUrl[] | []> {
        let pokemons: PokemonUrl[] = [];

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
        var pokemon: Pokemon = {id: '',name: '',img: '',price: '', types: [], height: '', moves: [], weight: ''};

        await api.get(url).then(response => {
            pokemon = {
                id: response.data.id, 
                name: capitalize(response.data.name), 
                img: !response.data.sprites.other.dream_world.front_default ?
                response.data.sprites.front_default : response.data.sprites.other.dream_world.front_default,
                price: randomNumber(),
                height: response.data.height,
                weight: response.data.weight,
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