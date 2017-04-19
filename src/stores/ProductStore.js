import alt from 'alt';
import ProductActions from '../actions/ProductActions';

class ProductStore {
    constructor() {
        this.products = [];

        this.bindListeners({
            handleUpdateProducts: ProductActions.UPDATE_PRODUCTS
        });
    }

    handleUpdateLocations(products) {
      this.products = products;
    }
}

export default alt.createStore(ProductStore, 'ProductStore');
