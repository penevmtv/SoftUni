// Write a function that stores information about a person’s name and his address. The input comes as an array of strings. 
// Each string contains the name and the address separated by a colon. If you receive the same name twice just replace the address.
//  In the end, print the full list, sorted alphabetically by the person’s name.




function addressBook(arrOfStrings) {
    let addressMap = new Map();

    for (let element of arrOfStrings) {
        let [name, address] = element.split(`:`);
        addressMap.set(name, address);
    }

    let sortedArr = [...addressMap].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of sortedArr) {
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);