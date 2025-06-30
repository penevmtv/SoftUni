// You will receive two arrays. The first array represents the current stock of the local store. 
// The second array will contain products that the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and every odd index will hold the quantity of that product.
// The second array could contain products that are already in the local store. If that happens increase the quantity
//  for the given product. You should store them into an object, and print them in the following format: (product -> quantity)
// All of the arrays’ values will be strings.




function storeProvision(stockArray, orderedArray) {
    let resultObj = {};
    for (let i = 0; i < stockArray.length; i += 2) {
        let product = stockArray[i];
        let quantity = Number(stockArray[i + 1]);

        resultObj[product] = quantity;
    }   
    
    for (let i = 0; i < orderedArray.length; i += 2) {
        let product = orderedArray[i];
        let quantity = Number(orderedArray[i + 1]);

        if (resultObj.hasOwnProperty(product)) {
            resultObj[product] += quantity;
        } else {
            resultObj[product] = quantity;
        }
    }

    for (let [product, quantity] of Object.entries(resultObj)) {
        console.log(`${product} -> ${quantity}`);    
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
