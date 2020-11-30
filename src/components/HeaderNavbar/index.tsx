import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import logoImg from '../../assets/pokemon_logo.svg';
import { usePokemons } from '../../contexts/usePokemon';
import { Link } from 'react-router-dom';
import "./styles.css";

const HeaderNavbar: React.FC = () => {
  const { config, getConfigs, getConfig, handleSaveConfig } = usePokemons();
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    let configStorage = localStorage.getItem('@PokeStore:config');
    setSelected(configStorage ? configStorage : JSON.stringify(config));
  }, [])

  const renderConfigs = () => {
    return getConfigs().map(config => <option key={config.type} value={JSON.stringify(config)}>{config.name}</option>)
  }

  return (
    <>
      <Navbar className="fixed_nav" bg={getConfig().color} variant="dark">
        <Container>
          <Link to='/' className="nav-link hide-padding">
            <Navbar.Brand href="#home">
              <img
                width={150}
                height={50}
                className="d-inline-block align-top"
                alt="Pokemon logo"
                src={logoImg}
              />
            </Navbar.Brand>
          </Link>
          <Nav className="mr-auto">
            <Link to='/main' className="nav-link link_navbar">Home</Link>
            <Link to='/shoppings' className="nav-link link_navbar">Compras</Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <div className="justify_select">
              <div className="text_select">
                Trocar Loja:
                </div>
              <Form.Control
                size="sm"
                onChange={(e) => {
                  handleSaveConfig(JSON.parse(e.target.value));
                  setSelected(e.target.value)
                }}
                value={selected}
                as="select">
                {renderConfigs()}
              </Form.Control>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderNavbar;