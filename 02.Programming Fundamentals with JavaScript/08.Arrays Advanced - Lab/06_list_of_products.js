//  You will receive an array of products. Print a numbered array of all the products ordered by name.


function listOfProducts(arrOfProducts) {
    
    let sortedProducts = arrOfProducts.sort((a,b) => a.localeCompare(b));
    let numberedProducts = [];

    for (let i = 0; i < sortedProducts.length; i++) {
        let product = `${i + 1}.${sortedProducts[i]}`;
        numberedProducts.push(product);
    }
    return numberedProducts.join(`\n`);
}

