import React from 'react';
import { Container, Content } from "../../styles/components/components";
import { useCart } from '../../contexts/shoppingCart';
import { Shopping as ShoppingModel }  from '../../interfaces/models';
import { usePokemons } from '../../contexts/usePokemon';
import { FaCheck } from 'react-icons/fa';
import Header from '../../components/Header';
import 'moment/locale/pt-br';
import "./styles.css";

const Shopping: React.FC = () => {
    const { shoppings } = useCart();
    const { getConfig } = usePokemons();

    const renderItems = (shop: ShoppingModel) => {
        return shop.items.map(item => (
            <div key={item.id} className="justify-item">
                <img 
                    width={30}
                    height={30}
                    src={item.img} 
                    alt={item.name}
                />
                <div className="pokemon-name">{item.name}</div>
                <div className="pokemon-name">X{item.count}</div>
            </div>  
        ));
    }
    return (
        <>
            <Header />
            <Container>
                <Content>
                    <div className="content-shop">
                        {shoppings.map(shop => (
                            <div key={shop.id} className="card">
                                <div className={`content-number ${getConfig().color.secondary}`}>                                
                                    <h1 className="strong-id">Pedido Nº #{shop.id}  <FaCheck color={'#0ef60e'} /></h1>
                                   
                                </div>
                                <div className="flex-items">{renderItems(shop)}</div>
                                <div className={`date-footer ${getConfig().color.secondary}`}>
                                    <div>Pedido realizado em: {shop.createDate}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Content>
            </Container>
        </>
    )
}

export default Shopping;