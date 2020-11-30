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
    cartItems: CartItem[];
}

export interface CartItem {
    id: string;
    name: string;
    img: string;
    price: string;
    count: number;
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
    cartItems: CartItem[],
    shoppings: Shopping[],
    handleAdd(pokemon: Pokemon): void;
    handleRemove(id: string): void;
    handleRemoveAllItems(): void;
    handleSaveShopping(): void;
}

export interface Shopping {
    name: string;
    items: CartItem[];
    createDate: Date;
}

export interface PokemonProps {
    pokemon: PokemonUrl;
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