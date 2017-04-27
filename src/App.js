import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Minibasket from './components/Minibasket';
import ProductList from './components/ProductList';
import './App.css';

class App extends Component {
    render() {
        return (
        <div className="body-wrapper">
            <div className="header container">
              <h2>Welcome to React</h2>
              <Minibasket/>
            </div>
            <div className="body-wrapper container">
                <ProductList/>
            </div>
        </div>
        );
    }
}

export default App;
