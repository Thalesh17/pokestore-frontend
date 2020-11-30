import React from 'react';
import { Container, Table } from 'react-bootstrap';
import HeaderNavbar from '../../components/HeaderNavbar';
import { useCart } from '../../contexts/shoppingCart';
import moment from 'moment';
import 'moment/locale/pt-br';
import "./styles.css";

const Shopping: React.FC = () => {
    const { shoppings } = useCart();
    return (
        <>
            <HeaderNavbar />
            <Container>
                <div className="content">
                    <h3 className="align-title">🛒 Compras</h3>
                    <Table striped bordered hover size="sm">
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
                                    <td>{shop.items.map(r=> r.name).join(', ')}</td>
                                    <td>{moment(String(shop.createDate).split('T')[0]).format('L')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    )
}

export default Shopping;