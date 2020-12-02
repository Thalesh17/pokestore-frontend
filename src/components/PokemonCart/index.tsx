import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/shoppingCart';
import { usePokemons } from '../../contexts/usePokemon';
import { Pokemon, PokemonProps, setDefaultPokemon } from '../../interfaces/models';
import { numberFormatBRL } from '../../utils/utils';
import { Button } from '../../styles/components/components';
import api from '../../services/api';
import "./styles.css";
import ModalPokemon from '../../pages/ModalPokemon';

const PokemonCart: React.FC<PokemonProps> = ({ pokemon }) => {
    const Fade = require('react-reveal/Fade');
    const { config } = usePokemons();
    const { handleAdd, handleRemove } = useCart();
    const [pokemonData, setPokemonData] = useState<Pokemon>(setDefaultPokemon());
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    useEffect(() => {
        const getPokemonByUrl = async (url: string) => {
            let data = await api.getPokemonByUrl(url);
            setPokemonData(data);
        }

        getPokemonByUrl(pokemon.url);
    }, [pokemon]);

    const openModal = (pokemon: Pokemon): void => {
        setIsOpenModal(true);
    }

    const closeModalDetail = (): void => {
        setIsOpenModal(false);
    }

    return (
        <>
            {/* {!pokemonData && <Spinner className="spinner-load" animation="border" variant="primary" />} */}
            {pokemonData && (
                <Fade bottom cascade>
                    <div className="pokemon_item">
                        <div className={`card_image ${config.color}`}>
                            <img
                                alt="item"
                                src={pokemonData.img}
                            />
                        </div>
                        <div className="card-body">
                            <div className="justify-title-price">
                                <h5 className="text-black">
                                    {pokemonData.name}
                                </h5>
                                <h5 className="text-black">
                                    {pokemonData.price && numberFormatBRL(parseFloat(pokemonData.price))}
                                </h5>
                            </div>
                            <div className={`content-button`}>
                                <div onClick={() => openModal(pokemonData)} className={`pokemon_cart ${config.color}`}>
                                    <h5 className="text-black">
                                        Detalhes
                                    </h5>
                                </div>
                                <div className={`pokemon_cart ${config.color}`}>
                                    <h5
                                        onClick={() => handleAdd(pokemonData)}
                                        className={`btn-transparent text-black`}>Adicionar
                                    </h5>
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