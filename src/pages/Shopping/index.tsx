import React from 'react';
import { Container, Table, Content } from "../../styles/components/components";
import { useCart } from '../../contexts/shoppingCart';
import Header from '../../components/Header';
import moment from 'moment';
import 'moment/locale/pt-br';
import "./styles.css";
import { Shopping as ShoppingModel }  from '../../interfaces/models';

const Shopping: React.FC = () => {
    const { shoppings } = useCart();

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
                    <h2 className="align-title">🛒 Pedidos</h2>
                    <Table>
                        <thead>
                            <tr>
                                <th>Pedido Nº</th>
                                <th>Itens</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shoppings.map(shop => (
                                <tr>
                                    <td className="strong-id">#{shop.id}</td>
                                    <td><div className="flex-items">{renderItems(shop)}</div></td>
                                    <td>{shop.createDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Content>
            </Container>
        </>
    )
}

export default Shopping;