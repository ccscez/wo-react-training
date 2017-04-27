import alt from '../alt';
import ProductActions from '../actions/ProductActions';

class ProductStore {
    constructor() {
        this.products = [];
        this.errorMessage = null;
        this.loading = false;
        this.bindListeners({
            handleUpdateProducts: ProductActions.UPDATE_PRODUCTS,
            handleFetchProducts: ProductActions.FETCH_PRODUCTS,
            handleProductsFailed: ProductActions.PRODUCTS_FAILED
        });
    }
    handleUpdateProducts(products) {
        this.products = products;
        this.errorMessage = null;
        this.loading = false;
    }
    handleFetchProducts() {
        // reset the array while we're fetching new products so React can
        // be smart and render a spinner for us since the data is empty.
        this.loading = true;
        this.products = [];
    }
    handleProductsFailed(errorMessage) {
        this.errorMessage = `Error: ${errorMessage}`;
        this.loading = false;
    }
}

export default alt.createStore(ProductStore, 'ProductStore');
