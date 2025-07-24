// Write a function to calculate the total cost of different types of furniture. You will be given some lines
//  of input until you receive the line "Purchase". For the line to be valid it should be in the following format:
// ">>{furniture name}<<{price}!{quantity}"
// The price can be a floating-point number or a whole number. Furniture items must start with a capital letter.
//  Store the names of the furniture and the total price. At the end print each bought furniture on a separate line in the format:
// "Bought furniture:
// {1st name}
// {2nd name}
// …"
// And on the last line print, the following: "Total money spend: {spend money}" formatted to the second decimal point.
// If there are not valid furniture print only:
// Bought furniture:
// Total money spend: {spend money}




function furniture(arrayOfStrings) {

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/;

    let names = `Bought furniture:`;
    let totalPrice = 0.00;

    console.log(`Bought furniture:`);

    for (let string of arrayOfStrings) {

        if (string === `Purchase`) break;

        // let match = string.match(pattern);
        let match = pattern.exec(string);

        if (match) {

            let name = match.groups.name;
            console.log(name);
            
            let price = parseFloat(match.groups.price);
            let quantity = parseInt(match.groups.quantity);

            totalPrice += price * quantity;
        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
);

