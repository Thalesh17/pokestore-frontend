import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderNavbar from '../../components/HeaderNavbar';
import Pokemons from '../Pokemons';
import ShoppingCart from '../ShoppingCart';
import "./styles.css";

const Home = () => {
    return (
        <>
            <HeaderNavbar />
            <Container className="main">
                <Pokemons />
                <ShoppingCart />
            </Container>
        </>
    )
}

export default Home;