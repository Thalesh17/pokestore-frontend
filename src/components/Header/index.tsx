import React, { useState, useEffect, useContext } from 'react';
import { usePokemons } from '../../contexts/usePokemon';
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import logoImg from '../../assets/pokemon_logo.svg';
import pokeball from '../../assets/pokeball.svg';
import "./styles.css";

const Header: React.FC = () => {
  const { config, getConfigs, getConfig, handleSaveConfig } = usePokemons();
  const [selected, setSelected] = useState<string>('');
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    let configStorage = localStorage.getItem('@Pokeshop:config');
    setSelected(configStorage ? configStorage : JSON.stringify(config));
  }, [])

  const renderConfigs = () => {
    return getConfigs().map(config => <option key={config.type} value={JSON.stringify(config)}>{config.name}</option>)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 698px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className={`${getConfig().color.primary} Header`}>
      <Link to='/main' className="nav-link link_navbar">
        <img
          width={100}
          height={50}
          className="d-inline-block align-top"
          alt="Pokemon logo"
          src={logoImg}
        />
      </Link>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className={`nav ${getConfig().color.primary}`}>
          <Link to='/' className="nav-link link_navbar">Home</Link>
          <Link to='/shoppings' className="nav-link link_navbar">Pedidos</Link>
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
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="pokeball">
        <img
          width={130}
          height={50}
          className="d-inline-block align-top"
          alt="Pokemon logo"
          src={pokeball}
        />
      </button>
    </header>
  )
}

export default Header;