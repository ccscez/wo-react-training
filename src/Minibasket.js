import React from 'react';
import { Badge } from 'reactstrap';

export default class Minibasket extends React.Component {
    render() {
        return (
            <div className="minibasket">
                Total {this.props.totalPrice} $ <Badge color="info">{this.props.productList.length}</Badge>
                {
                    this.props.productList.length > 0 &&
                    (
                        <ul className="minibasket-info">
                            {this.props.productList.map((product) =>
                                <li key={product.id}>
                                    <div className="product-name">{product.name}</div>
                                    <div className="product-price">{product.price}</div>
                                    <div className="product-quantity">{product.quantity}</div>
                                </li>
                            )}
                        </ul>
                    )
                }
            </div>
        )
    }
}
