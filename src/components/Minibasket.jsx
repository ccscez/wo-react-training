import React from 'react';
// import PropTypes from 'prop-types';
import {Badge, Table} from 'reactstrap';
import Formatter from '../libs/Formatter';
import ShoppingCartStore from '../stores/ShoppingCartStore';

export default class Minibasket extends React.Component {
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this);
        this.state = ShoppingCartStore.getState()
    }
    componentDidMount() {
        ShoppingCartStore.listen(this.onChange);
    }
    componentWillUnmount() {
        ShoppingCartStore.unlisten(this.onChange);
    }
    onChange(state){
        this.setState(state)
    }
    render() {
        return (
            <div className="minibasket">
                Total {Formatter.money(this.state.total)} <Badge color="info">{this.state.products.length}</Badge>
                {
                    this.state.products.length > 0 &&
                    (
                        <div className="minibasket-info">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Line total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.products.map((product, index) =>
                                        <tr key={product.id}>
                                            <th scope="row">{index+1}</th>
                                            <td className="product-name">{product.name}</td>
                                            <td className="product-price">{Formatter.money(product.price)}</td>
                                            <td className="product-quantity">{product.quantity}</td>
                                            <td className="product-line-total">{Formatter.money((product.price * product.quantity))}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    )
                }
            </div>
        );
    }
}
