import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/shoppingCart';
import { usePokemons } from '../../contexts/usePokemon';
import { Pokemon, PokemonProps, setDefaultPokemon } from '../../interfaces/models';
import { numberFormatBRL } from '../../utils/utils';
import ModalPokemon from '../../pages/ModalPokemon';
import api from '../../services/api';
import "./styles.css";
import {FaTasks,FaPlusCircle} from 'react-icons/fa';

const PokemonCart: React.FC<PokemonProps> = ({ pokemon }) => {
    const Fade = require('react-reveal/Fade');
    const Zoom = require('react-reveal/Zoom');
    const { config } = usePokemons();
    const { handleAdd } = useCart();
    const [ pokemonData, setPokemonData ] = useState<Pokemon>(setDefaultPokemon());
    const [ isOpenModal, setIsOpenModal ] = useState<boolean>(false);

    const getPokemonByUrl = async (url: string) => {
        let data = await api.getPokemonByUrl(url);
        setPokemonData(data);
    }

    useEffect(() => {
        getPokemonByUrl(pokemon.url);
    }, [pokemon]);

    const openModal = (pokemon: Pokemon): void => {
        setIsOpenModal(true);
    }

    const closeModalDetail = (): void => {
        setIsOpenModal(false);
    }

    const handleAddPokemon = (value: Pokemon) => {
        handleAdd(value);
    }

    return (
        <>
            {pokemonData && (
                <Fade bottom cascade>
                    <div className="pokemon_item">
                        <div className={`card_image ${config.color.primary}`}>
                            <Zoom>

                                <img
                                    alt={pokemonData.name}
                                    src={pokemonData.img}
                                />
                            </Zoom>
                        </div>
                        <div className="card-body">
                            <div className="justify-title-price">
                                <h5 data-testid={pokemonData.name} className="text-black">
                                    {pokemonData.name}
                                </h5>
                                <h5 className="text-black">
                                    {pokemonData.price && numberFormatBRL(parseFloat(pokemonData.price))}
                                </h5>
                            </div>
                            <div className={`content-button`}>
                                <div onClick={() => openModal(pokemonData)} className={`pokemon_cart ${config.color.secondary}`}>
                                    <FaTasks color={'#fff'} />
                                    <h5 className="text-black">
                                    Detalhes
                                    </h5>
                                </div>
                                <div className="pokemon_cart btn-add" data-testid='add-pokemon' onClick={() => handleAddPokemon(pokemonData)}>
                                <FaPlusCircle color={'#fff'} /><h5 className={`text-black`}>Adicionar</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            )}
            {isOpenModal && (
                <ModalPokemon 
                    pokemon={pokemonData}
                    isOpen={isOpenModal}
                    closeModal={closeModalDetail}
                />
            )}
        </>
    )
}

export default PokemonCart;