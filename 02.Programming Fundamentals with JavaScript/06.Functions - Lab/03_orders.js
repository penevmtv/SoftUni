// Write a function that calculates the total price of an order and prints it on the console. The function should receive one of the following products:
//  coffee, coke, water, snacks; and a quantity of the product. The prices for a single piece of each product are: 
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
// Print the result formatted to the second decimal place.


function orders(product, quantity) {
    let totalPrice;
    switch (product) {
        case `coffee`:
            totalPrice = x => x * 1.50;
            break;
        case `water`:
            totalPrice = x => x * 1.00;
            break;
        case `coke`:
            totalPrice = x => x * 1.40;
            break;
        case `snacks`:
            totalPrice = x => x * 2.00;
            break;
    }
    console.log(totalPrice(quantity).toFixed(2));
}


function orders(product, quantity) {
    let totalPrice;
    switch (product) {
        case `coffee`:
            totalPrice = x => x * 1.50;
            break;
        case `water`:
            totalPrice = x => x * 1.00;
            break;
        case `coke`:
            totalPrice = x => x * 1.40;
            break;
        case `snacks`:
            totalPrice = x => x * 2.00;
            break;
    }
    return totalPrice(quantity).toFixed(2);
}