import alt from '../alt';
import ProductSource from '../sources/ProductSource';

class ProductActions {
    constructor() {
        this.generateActions('updateProducts');
    }
    // updateProducts(products) {
    //     return products
    // }
    fetchProducts() {
        return (dispatch) => {
            // we dispatch an event here so we can have "loading" state.
            dispatch();
            ProductSource.fetch()
                .then((products) => {
                    // we can access other actions within our action through `this.actions`
                    this.updateProducts(products);
                })
                .catch((errorMessage) => {
                    this.productsFailed(errorMessage);
                });
        };
    }
    productsFailed(errorMessage) {
        return errorMessage;
    }
}

export default alt.createActions(ProductActions);
