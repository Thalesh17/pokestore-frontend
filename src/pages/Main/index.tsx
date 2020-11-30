import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import HeaderNavbar from '../../components/HeaderNavbar';
import Pokemons from '../Pokemons';
import ShoppingCart from '../ShoppingCart';
import "./styles.css";

const Main: React.FC = () => {
    return (
        <>
            <HeaderNavbar />
            <Container>
                <div className="content">
                    <Pokemons />
                    <ShoppingCart />
                </div>
            </Container>
        </>
    )
}

export default Main;