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
                addedProduct.quantity += 1;
                isExists = true;
            }
            total += (addedProduct.quantity * addedProduct.price);
        });
        if (!isExists) {
            product.quantity = 1;
            total += (product.quantity * product.price);
            products.push(product);
        }

        this.products = products;
        this.total = total;
    }
}

export default alt.createStore(ShoppingCartStore, 'ShoppingCartStore');
