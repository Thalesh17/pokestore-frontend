import { RouteComponentProps } from "react-router-dom"

export interface ChildComponentProps extends RouteComponentProps<any> {}

export interface Pokemon {
    id: string;
    name: string;
    img: string;
    price: string;
    height: string;
    moves: MovesUrl[],
    types: TypesUrl[];
}

export const setDefaultPokemon = () : Pokemon => {
    return {id: '', img: '',name:'',price: '', moves: [], height: '', types: []}
}

export interface Config {
    name: string;
    type: string;
    color: Color;
    value: string;
}

export interface Color {
    primary: string;
    secondary: string;
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
    pokemon: Pokemon;
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
    id: number;
    items: CartItem[];
    createDate: string;
}

export interface PokemonProps {
    pokemon: PokemonUrl;
}

export interface PokemonUrl {
    id: string;
    name: string;
    url: string;
}

export interface TypesUrl {
    name: string;
    url: string;
}

export interface MovesUrl {
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

export interface ModalPokemonProps {
    pokemon: Pokemon;
    isOpen: boolean;
    closeModal(): void;
}