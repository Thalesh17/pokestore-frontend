import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import HeaderNavbar from '../../components/HeaderNavbar';
import { Pokemon } from '../../interfaces/models';
import api from '../../services/api';
import Pokemons from '../Pokemons';
import ShoppingCart from '../ShoppingCart';
import "./styles.css";

const Home: React.FC = () => {
    return (
        <>
            <HeaderNavbar />
            <Container>
                <div className="content">
                    <Pokemons />
                    <ShoppingCart />
                </div>
            </Container>
            <footer>Feito por Thales Henrique</footer>
        </>
    )
}

export default Home;