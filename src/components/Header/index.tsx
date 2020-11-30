import React, { useState, useEffect, useContext } from 'react';
import logoImg from '../../assets/pokemon_logo.svg';
import { usePokemons } from '../../contexts/usePokemon';
import { Link } from 'react-router-dom';
import { Container, HeaderNav } from "../../styles/header/styles";
import "./styles.css";

const Header: React.FC = () => {
  const { config, getConfigs, getConfig, handleSaveConfig } = usePokemons();
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    let configStorage = localStorage.getItem('@PokeStore:config');
    setSelected(configStorage ? configStorage : JSON.stringify(config));
  }, [])

  const renderConfigs = () => {
    console.log(getConfig().color);
    return getConfigs().map(config => <option key={config.type} value={JSON.stringify(config)}>{config.name}</option>)
  }

  return (
    <HeaderNav className={getConfig().color}>
      <Container>
          <Link to='/' className="nav-link hide-padding">
              <img
                width={150}
                height={50}
                className="d-inline-block align-top"
                alt="Pokemon logo"
                src={logoImg}
              />
          </Link>
          <Link to='/main' className="nav-link link_navbar">Home</Link>
          <Link to='/shoppings' className="nav-link link_navbar">Compras</Link>
          <div className="justify_select">
            <div className="text_select">
              Trocar Loja:
              </div>
            <select
              onChange={(e) => {
                handleSaveConfig(JSON.parse(e.target.value));
                setSelected(e.target.value)
              }}
              value={selected}>
              {renderConfigs()}
            </select>
          </div>
      </Container>
      {/* <header className={`fixed_nav ${getConfig().color}`}>
      </header> */}
    </HeaderNav>
      // <Navbar expand="md" className="fixed_nav" bg={getConfig().color} variant="dark">
      //     <div className="container">

      //     </div>
        /* <Container>
          <Link to='/' className="nav-link hide-padding">
              <img
                width={150}
                height={50}
                className="d-inline-block align-top"
                alt="Pokemon logo"
                src={logoImg}
              />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <Link to='/main' className="nav-link link_navbar">Home</Link>
            <Link to='/shoppings' className="nav-link link_navbar">Compras</Link>
          </Nav>
            <div className="">
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
      </Navbar> */
  )
}

export default Header;