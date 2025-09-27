// You have to create a sorted catalog of store products. You will be given the products’ names and prices. 
// You need to order them in alphabetical order. 
// Input
// The input comes as an array of strings. Each element holds info about a product in the following format:
// "{productName} : {productPrice}"
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. 
// There will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
// Output
// As output, you must print all the products in a specified format. They must be ordered exactly as specified above. 
// The products must be divided into groups, by the initial of their name. 
// The group's initial should be printed, and after that, the products should be printed with 2 spaces before their names.




function storeCatalogue(arrOfStrs) {
    const catalog = {};

    for (const element of arrOfStrs) {
        let [product, price] = element.split(` : `);
        price = Number(price);
        
        const capitalLetter = product[0];

        if (!catalog[capitalLetter]) catalog[capitalLetter] = {};

        catalog[capitalLetter][product] = price;
    }
    
    const sortedCapitalLetter = Object.entries(catalog).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (const [capitalLetter, productsObj] of sortedCapitalLetter) {
        console.log(capitalLetter);

        const sortedProducts = Object.entries(productsObj).sort((a, b) => a[0].localeCompare(b[0]));

        for (const [key, value] of sortedProducts) {
            console.log(`\t${key}: ${value}`);
        }
    }
}
storeCatalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]);
