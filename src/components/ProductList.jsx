import React from 'react';
// import PropTypes from 'prop-types';
import ProductStore from '../stores/ProductStore';
import ProductActions from '../actions/ProductActions';
import ProductItem from './ProductItem';

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = ProductStore.getState();
    }
    // You should initialize state in the constructor when using ES6 classes,
    // and define the getInitialState method when using React.createClass
    // Ref: http://stackoverflow.com/questions/30668326/what-is-the-difference-between-using-constructor-vs-getinitialstate-in-react-r
    // -------------------------------------------------------------------------
    // getInitialState() {
    //     return ProductStore.getState()
    // }
    componentDidMount() {
        ProductStore.listen(this.onChange);
        ProductActions.fetchProducts();
    }
    componentWillUnmount() {
        ProductStore.unlisten(this.onChange);
    }
    onChange(state) {
        this.setState(state);
    }
    render() {
        return (
            <div className="row product-list">
                {this.state.loading &&
                    <h1>Loading...</h1>}

                {this.state.errorMessage &&
                    <h1>{this.state.errorMessage}</h1>}

                {this.state.products.length > 0 &&
                    this.state.products.map((product) =>
                        <ProductItem key={product.id} product={product}/>
                    )}
            </div>
        );
    }
}
