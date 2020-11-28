import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logoImg from '../../assets/pokemon_logo.svg';

const HeaderNavbar: React.FC = () => {
  return (
    <>
       <Navbar bg="primary" variant="dark">
         <Container>
          <Navbar.Brand href="#home">
              <img 
              width={200}
              height={80}
                className="d-inline-block align-top"
                alt="Pokemon logo" 
                src={logoImg} 
              />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
         </Container>
      </Navbar>
    </>
  )
}

export default HeaderNavbar;