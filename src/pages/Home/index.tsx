import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HeaderNavbar from '../../components/HeaderNavbar';
import Pokemons from '../Pokemons';
import ShoppingCart from '../ShoppingCart';

const Home = () => {
    return (
        <>
            <HeaderNavbar />
            <Container>
                <Row>
                    <Pokemons />
                </Row>
                <ShoppingCart />
            </Container>
        </>
    )
}

export default Home;