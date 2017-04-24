let mockData = [
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

class ProductSource {
    fetch() {
        // returning a Promise because that is what fetch does.
        return new Promise(function (resolve) {
            // simulate an asynchronous action where data is fetched on
            // a remote server somewhere.
            setTimeout(function () {
                // resolve with some mock data
                resolve(mockData);
            }, 250);
        });
    }
}

export default new ProductSource();
