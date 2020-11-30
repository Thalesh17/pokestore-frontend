import React from 'react';
import { FilterPokemonsProps } from '../../interfaces/models';
import { Container } from '../../styles/components/components';
import "./styles.css";

const FilterPokemons: React.FC<FilterPokemonsProps> = ({ handleFilter, countResult }) => {
    return (
        <Container className="filter">
            <div className="content-filter">
                <div className="filter-name">
                        <label className="label-filter">Pesquisar: </label>
                        <input
                            type="text" 
                            className="form-name" 
                            onChange={(e) => handleFilter(e.target.value)}
                            placeholder="Pesquisar por Nome" />
                        <small className="filter-result"><strong>{countResult}</strong> Pokemons encontrados</small>
                </div>
            </div>
        </Container>
    )
}

export default FilterPokemons;