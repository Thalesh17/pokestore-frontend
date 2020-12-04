import React from 'react';
import { usePokemons } from '../../contexts/usePokemon';
import { Config, ChildComponentProps } from '../../interfaces/models';
import { configTypeFire, configTypeWater, configTypeGround } from '../../utils/utils';
import "./styles.css";

const Home:  React.FC<ChildComponentProps> = ({ history })  => {
    const { handleSaveConfig } = usePokemons();
    let fire: Config = configTypeFire(),
        water: Config = configTypeWater(),
        ground: Config = configTypeGround();

    const redirectByType = (value: Config): void => {
        handleSaveConfig(value);
        history.push('/main');
    }

    return (
        <div data-test-id="main" className="main-home">
                <div className="home-content">
                    <h1>PokeShop</h1>
                    <h1>Bem vindos a PokeShop</h1>
                    <p className="text-content">Projeto desenvolvido por Thales Henrique do desafio de Front end Pleno da B2W Digital</p>
                    <h4>Escolha qual tipo de Pokemon você quer espiar!</h4>
                </div>
                <div className="home">
                    <div onClick={() => redirectByType(fire)} className="home-content home-content-red">
                        <h1>FOGO</h1>
                    </div>
                    <div onClick={() => redirectByType(ground)} className="home-content home-content-ground">
                        <h1>TERRA</h1>
                    </div>
                    <div onClick={() => redirectByType(water)} className="home-content home-content-blue">
                        <h1>ÁGUA</h1>
                    </div>
                </div>
        </div>
    )
}

export default Home;