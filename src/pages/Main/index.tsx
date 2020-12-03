import React, {useState, useEffect} from 'react';
import Pokemons from '../Pokemons';
import ShoppingCart from '../ShoppingCart';
import "./styles.css";
import Header from '../../components/Header';
import { Container } from '../../styles/components/components';

const Main: React.FC = () => {
    return (
        <>
            <Header/>
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