import React from 'react';
import { usePokemons } from '../../contexts/usePokemon';
import { Config } from '../../interfaces/models';
import "./styles.css";
import { RouteComponentProps } from 'react-router-dom';
interface ChildComponentProps extends RouteComponentProps<any> {}
const Home:  React.FC<ChildComponentProps> = ({ history })  => {
    const { handleSaveConfig } = usePokemons();
    let fire: Config = {color: 'type-fire',name:'Fogo',value:'fire',type:'10'},
        water: Config = {color: 'type-water',name:'Água',value:'water',type:'11'};

    const redirectByType = (value: Config): void => {
        handleSaveConfig(value);
        history.push('/main');
    }

    return (
        <div className="main-home">
            <h1>PokeShop</h1>
            <div className="home-content">
                <h1>Bem vindos a PokeShop</h1>
                <p className="text-content">Projeto desenvolvido por Thales Henrique do desafio de Front end Pleno da B2W Digital</p>
                <h4>Escolha qual tipo de Pokemon você quer espiar!</h4>
            </div>
            <div className="home">
                <div onClick={() => redirectByType(water)} className="home-content home-content-blue">
                    <h1>ÁGUA</h1>
                </div>
                <div onClick={() => redirectByType(fire)} className="home-content home-content-red">
                    <h1>FOGO</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;