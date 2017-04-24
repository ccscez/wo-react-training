import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Minibasket from './Minibasket';
import ProductList from './ProductList';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.state = {
            minibasket: {
                productList: [],
                totalPrice: 0
            }
        };
    }

    handleAddProduct(product) {
        let productList = this.state.minibasket.productList;
        let isExists = false;
        let totalPrice = 0;
        productList.forEach((addedProduct) => {
            if (addedProduct.id === product.id) {
                addedProduct.quantity = addedProduct.quantity + 1;
                isExists = true;
            }
        });
        if (!isExists) {
            product.quantity = 1;
            productList.push(product);
        }
        productList.forEach((prod) => {
            totalPrice = totalPrice + (prod.quantity * prod.price);
        });
        this.setState({
            minibasket: {
                productList: productList,
                totalPrice: totalPrice
            }
        });
    }
    render() {
        const PRODUCTS = [
            {
                id: 1,
                name: 'iPhone 7',
                price: 399
            },
            {
                id: 2,
                name: 'iPhone 7 Plus',
                price: 499
            },
            {
                id: 3,
                name: 'Samsung Galaxy S8',
                price: 399
            },
            {
                id: 4,
                name: 'Samsung Galaxy S8 Plus',
                price: 499
            },
            {
                id: 5,
                name: 'Huawei P10',
                price: 399
            }
        ];

        return (
        <div className="body-wrapper">
            <div className="header container">
              <h2>Welcome to React</h2>
              <Minibasket
                    totalPrice={this.state.minibasket.totalPrice}
                    productList={this.state.minibasket.productList}/>
            </div>
            <div className="body-wrapper container">
                <ProductList productList={PRODUCTS} handleAddProduct={this.handleAddProduct}/>
            </div>
        </div>
        );
    }
}

export default App;
