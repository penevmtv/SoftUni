// Write a function that stores information about a person’s name and phone number. The input is an array of strings with space-separated name and number. 
// Replace duplicate names. Print the result as shown.



function phoneBook(arrOfStr) {
    let phoneMap = new Map();

    for (let element of arrOfStr) {
        let [name, phone] = element.split(` `);
        phoneMap.set(name, phone);
    }

    for (let [name, phone] of phoneMap) {
        console.log(`${name} -> ${phone}`);
    }
}
phoneBook(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
);