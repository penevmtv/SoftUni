// Create a class Storage. It should have the following properties, while the constructor should only receive a capacity:
// •	capacity – a number that decreases when adding a given quantity of products to storage
// •	storage – list of products (object). Each product should have:
// o	name - a string
// o	price – a number (price is for a single piece of product)
// o	quantity – a number
// •	totalCost – the sum of the cost of the products
// The class should also have the following methods:
// •	addProduct – a function that receives a product and adds it to the storage
// •	getProcuts – a function that returns all the products in storage in JSON format, each on a new line




class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }
    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
    }
    getProducts() {
        let result = [];
        this.storage.forEach(obj => result.push(JSON.stringify(obj)));
        return result.join(`\n`);
    }
}

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
