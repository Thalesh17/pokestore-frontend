import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import HeaderNavbar from '../../components/HeaderNavbar';
import "./styles.css";

const Shopping: React.FC = () => {
    return (
        <>
            <HeaderNavbar />
            <Container>
                <div className="content">
                   <h1>Compras</h1>
                </div>
            </Container>
        </>
    )
}

export default Shopping;