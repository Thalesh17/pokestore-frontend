import { Pokemon, PokemonTypeUrl } from "../interfaces/models";

const api = `https://pokeapi.co/api/v2`;
const apiPokeType = `type/11`;

const fetchApi = async (endpoint: string) => {
    const req = await fetch(endpoint);
    const json = req.json();
    
    return json;
}

export default {

    async getPokemonsByType() : Promise<Pokemon[]> {
        let fetchPokemons: PokemonTypeUrl = await fetchApi(`${api}/${apiPokeType}`);
        var pokemons: Pokemon[] = [];
        
        fetchPokemons.pokemon.forEach(async pokemonUrl => {
            let result = await fetchApi(pokemonUrl.pokemon.url);
            
            pokemons.push({id: result.id, name: capitalize(result.name), img: result.sprites.other.dream_world.front_default})
        });
        console.log('oi',pokemons)

        return pokemons;
    },


}
const capitalize = (s: string): string => {
    return s.charAt(0).toUpperCase() + s.slice(1)
}