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
    const Zoom = require('react-reveal/Zoom');
    const Fade = require('react-reveal/Fade');
    const { handleAdd } = useCart();
    const { config } = usePokemons();

    return (
        <Modal open={isOpen} onClose={() => closeModal()} center>
            <div className="content-modal">
                <div className={`pokemon-image ${config.color.primary}`}>
                    <Zoom>
                        <img 
                            width={200}
                            height={200}
                            src={pokemon.img} 
                            alt={pokemon.name}
                        />
                    </Zoom>
                </div>
                <Fade>
                <div className="pokemon-descriptions">
                    <div className="content-name-price">
                        <h5 className="text-black">{pokemon.name}</h5>
                        <h5 className="text-black">{numberFormatBRL(parseFloat(pokemon.price))}</h5>
                    </div>
                    <div className="body">
                        {pokemon.types.map(type=> (
                        <span className={type.name}>{type.name}</span>
                        ))}
                    </div>
                    <div className="body weight-height">
                        <div>
                            <h5>Tamanho</h5>
                            <div className="flex-gap">
                                <h5>{pokemon.height}</h5>
                            </div>
                        </div>
                        <div>
                            <h5>Peso</h5>
                            <div className="flex-gap">
                                <h5>{pokemon.weight}</h5>
                            </div>
                        </div>
                    </div>                    
                    <div className="body">
                        <h5>Movimentos</h5>
                        <div className="flex-gap">
                            {pokemon.moves.map(type=> (
                                <h5>{type.name}</h5>
                            ))}
                        </div>
                    </div>                          
                    <div className="content-btn">
                        <Button
                            onClick={() => closeModal()}
                            className={`${config.color.secondary} btn-back`}>Voltar
                        </Button>
                        <Button
                            onClick={() => handleAdd(pokemon)}
                            className={`btn-add`}>Adicionar
                        </Button>
                    </div>
                </div>
                </Fade>
               
            </div>
        </Modal>
    )
}

export default ModalPokemon;