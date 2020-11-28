import { Pokemon } from '../interfaces/pokemon';

const api = `https://pokeapi.co/api/v2`;
const apiPokeType = `/type/11`;

const fetchApi = async (endpoint: string) => {
    const req = await fetch(`${api}/${endpoint}`);
    const json = req.json();
    console.log(json);
    
    return json;
}

export default {

    getPokemonsByType(): Pokemon {
        const pokemons = fetchApi(apiPokeType);

        return {img: '', name: ''}
    },


}