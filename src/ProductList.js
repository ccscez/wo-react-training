import React from 'react';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddProduct = this.handleAddProduct.bind(this);
    }
    handleAddProduct(product) {
        this.props.handleAddProduct(product);
    }
    render() {
        const productList = this.props.productList || [];
        return (
            <div className="row product-list">
                {productList.map((product) =>
                    <ProductItem key={product.id} product={product} handleAddProduct={this.handleAddProduct} />
                )}
            </div>
        );
    }
}

ProductList.propTypes = {
    handleAddProduct: PropTypes.func,
    productList: PropTypes.array
};
