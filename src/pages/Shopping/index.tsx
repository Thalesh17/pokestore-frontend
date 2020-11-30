import React from 'react';
import { Container, Table, Content } from "../../styles/components/components";
import { useCart } from '../../contexts/shoppingCart';
import Header from '../../components/Header';
import moment from 'moment';
import 'moment/locale/pt-br';
import "./styles.css";

const Shopping: React.FC = () => {
    const { shoppings } = useCart();
    return (
        <>
            <Header />
            <Container>
                <Content>
                    <h3 className="align-title">🛒 Compras</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>Comprador</th>
                                <th>Itens</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shoppings.map(shop => (
                                <tr>
                                    <td>{shop.name}</td>
                                    <td>{shop.items.map(r => r.name).join(', ')}</td>
                                    <td>{moment(String(shop.createDate).split('T')[0]).format('L')}</td>
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