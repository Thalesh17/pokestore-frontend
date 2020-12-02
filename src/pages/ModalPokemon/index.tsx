import React, { useState, useEffect, Props } from 'react';
import { useCart } from '../../contexts/shoppingCart';
import { usePokemons } from '../../contexts/usePokemon';
import { ModalPokemonProps } from '../../interfaces/models';
import { numberFormatBRL } from '../../utils/utils';
import { Button } from '../../styles/components/components';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import "./styles.css";

const ModalPokemon: React.FC<ModalPokemonProps> = ({isOpen, closeModal, pokemon}) => {
    const { handleAdd, handleRemove } = useCart();
    const { config } = usePokemons();

    return (
        <Modal open={isOpen} onClose={() => closeModal()} center>
            <div className="content-modal">
                <div className="pokemon-image">
                    <img 
                        width={200}
                        height={200}
                        src={pokemon.img} 
                        alt={pokemon.name}
                    />
                </div>
                <div className="pokemon-descriptions">
                    <label>Preço</label>
                    <div>{pokemon.price}</div>
                    <label>Altura</label>
                    <div>{pokemon.height}</div>
                    <Button
                        onClick={() => handleAdd(pokemon)}
                        className={`${config.color}`}>Comprar
                    </Button>
                </div>

               
            </div>
        </Modal>
    )
}

export default ModalPokemon;