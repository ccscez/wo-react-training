import alt from '../alt';
import ShoppingCartActions from '../actions/ShoppingCartActions';

class ShoppingCartStore {
    constructor() {
        this.products = [];
        this.total = 0;

        this.bindListeners({
            handleAddProduct: ShoppingCartActions.ADD_PRODUCT
        });
    }
    handleAddProduct(product) {
        let products = this.products;
        let isExists = false;
        let total = 0;
        products.forEach((addedProduct) => {
            if (addedProduct.id === product.id) {
                addedProduct.quantity = addedProduct.quantity + 1;
                isExists = true;
            }
        });
        if (!isExists) {
            product.quantity = 1;
            products.push(product);
        }
        products.forEach((prod) => {
            total = total + (prod.quantity * prod.price);
        });

        this.products = products;
        this.total = total;
    }
}

export default alt.createStore(ShoppingCartStore, 'ShoppingCartStore');
