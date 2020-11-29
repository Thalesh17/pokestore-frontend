export interface Pokemon {
    id: string;
    name: string;
    img: string;
    price: string;
}

export interface Config {
    name: string;
    type: string;
    color: string;
    value: string;
}

export interface Cart {

}

export interface ContextPokemon {
    pokemons: PokemonUrl[] | [];
    config: Config;
    findPokemons(): Promise<PokemonUrl[]>;
    getConfigs(): Config[];
    getConfig(): Config;
    handleSaveConfig(values: Config): void;
}

export interface ShoppingCart {
    handleAdd(): Promise<void>;
    handleRemove(id: string): void;

}

export interface PokemonProps {
    pokemon: PokemonUrl;
}

export interface ArrayPokemonProps {
    pokemons: Pokemon[]
}

export interface PokemonUrl {
    id: string;
    name: string;
    url: string;
}

export interface PokemonType {
    pokemon: PokemonUrl;
}

export interface FilterPokemonsProps {
    handleFilter(value: string): void;
    countResult: number;
}