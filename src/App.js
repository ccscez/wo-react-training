import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './App.css';

class App extends Component {
    render() {
        return (
        <div className="body-wrapper">
            <Header/>
            <div className="body-wrapper container">
                <ProductList/>
            </div>
        </div>
        );
    }
}

export default App;
