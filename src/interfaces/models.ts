export interface Pokemon {
    id: string;
    name: string;
    img: string;
}

export interface PokemonProps {
    pokemon: Pokemon;
}
export interface ArrayPokemonProps {
    pokemons: Pokemon[]
}

export interface PokemonUrl {
    name: string;
    url: string;
}

export interface PokemonType {
    pokemon: PokemonUrl;
}

export interface PokemonTypeUrl {
    pokemon: PokemonType[];
}