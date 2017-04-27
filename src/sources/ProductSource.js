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

// import axios from 'axios';

class ProductSource {
    fetch() {
        // returning a Promise because that is what fetch does.
        return new Promise(function (resolve, reject) {
            // axios.get('http://www.webon-thailand.com/recruit/products.json')
            // axios.get('https://jsonplaceholder.typicode.com/posts')
            //     .then((response) => {
            //         resolve(response.data);
            //     })
            //     .catch((error) => {
            //         reject(error.message);
            //     });
            setTimeout(() => {
                resolve(mockData);
            }, 1000);
        });
    }
}

export default new ProductSource();
