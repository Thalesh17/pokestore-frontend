import React from 'react';
import HeaderNavbar from '../../components/HeaderNavbar';
import Pokemons from '../Pokemons';
import ShoppingCart from '../ShoppingCart';

const Home = () => {
    return (
        <>
            <HeaderNavbar />
            <Pokemons />
            <ShoppingCart />
        </>
    )
}

export default Home;