// Write a function that takes a certain number of items and their quantity. If the same item appears more than once,
//  add the new amount to the existing one. In the end, print all the items and their amount without sorting them. 
//  The input comes as an array of strings. 



function storage(arrOfProducts) {
    let productsMap = new Map();

    for (let element of arrOfProducts) {

        let [product, quantity] = element.split(` `);
        quantity = Number(quantity);

        if (productsMap.has(product)) {
            currentQuantity = productsMap.get(product);
            currentQuantity += quantity;
            productsMap.set(product, currentQuantity);
        } else {
            productsMap.set(product, quantity);
        }
    }
    
    for (let [product, quantity] of productsMap) {
        console.log(`${product} -> ${quantity}`);
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);
