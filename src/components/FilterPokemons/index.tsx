import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { FilterPokemonsProps } from '../../interfaces/models';
import "./styles.css";

const FilterPokemons: React.FC<FilterPokemonsProps> = ({ handleFilter, countResult }) => {
    return (
        <Container className="filter">
            <div className="content-filter">
                <div className="filter-name">
                    <Form.Group className="form-name-group">
                        <label className="label-filter">Pesquisar: </label>
                        <Form.Control 
                            type="text" 
                            className="form-name" 
                            onChange={(e) => handleFilter(e.target.value)}
                            placeholder="Pesquisar por Nome" />
                        <small className="filter-result"><strong>{countResult}</strong> Pokemons encontrados</small>
                    </Form.Group>
                </div>
            </div>
        </Container>
    )
}

export default FilterPokemons;