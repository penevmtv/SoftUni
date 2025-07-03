// You have to create a sorted catalog of store products. You will be given the products’ names and prices. 
// You need to order them in alphabetical order. 
// The input comes as an array of strings. Each element holds info about a product in the following format:
// "{productName} : {productPrice}"
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. 
// You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
// As output, you must print all the products in a specified format. They must be ordered exactly as specified above. 
// The products must be divided into groups, by the initial of their name. The group's initial should be printed, and after that,
//  the products should be printed with 2 spaces before their names.





function catalogue(arrOfStr) {
    let sortedProducts = arrOfStr.sort((a, b) => a.localeCompare(b));
    let productsObj = {};
    let initialsPrinted = [];

    for (let element of sortedProducts) {
        let [name, price] = element.split(` : `);
        productsObj[name] = price;
    }    

    for (let name of Object.keys(productsObj)) {
        let initialOfName = name[0];

        if (!initialsPrinted.includes(initialOfName)) {
            console.log(initialOfName);
            initialsPrinted.push(initialOfName);
        }
        
        console.log(`  ${name}: ${productsObj[name]}`);
    }
}
catalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]
);



// Simpler solution:

function catalogue(arrOfStr) {
    arrOfStr.sort((a, b) => a.localeCompare(b));
    let initialsPrinted = [];

    for (let element of arrOfStr) {
        let [name, price] = element.split(` : `);
        let initialOfName = name[0];

        if (!initialsPrinted.includes(initialOfName)) {
            console.log(initialOfName);
            initialsPrinted.push(initialOfName);
        }
        
        console.log(`  ${name}: ${price}`);
    }
}
catalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]
);
