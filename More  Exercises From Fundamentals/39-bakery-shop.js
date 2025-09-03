// Maria is opening a bakery shop, and she needs your help to keep track of the stock availability.
// Create a program that keeps the information about the stock at the shop.
// You will be receiving lines with commands until you receive the "Complete" command. The possible commands are:
// •	"Receive {quantity} {food}":
// o	Add the quantity to the given food.
// o	If the food does not exist, add it to your record. 
// o	If the quantity is invalid (<= 0), ignore the command.
// •	"Sell {quantity} {food}":
// o	If the food is not in your record, print: "You do not have any {food}.".
// o	If there is not enough quantity of the wanted food, you should sell (decrease) what you have in stock and then remove the food from your record. 
// Print: "There aren't enough {food}. You sold the last {sold quantity} of them."
// o	Otherwise, decrease the quantity of the given food and print:  "You sold {quantity} {food}.". 
// If, after reducing the quantity, there is 0 amount of this food, you should remove it from your record.
// You must keep track of all sold food quantities!
// In the end, you should print the stock availability in the format:
// "{food1}: {quantity}
// {food2}: {quantity}
// …
// {foodN}: {quantity}
// All sold: {count of all sold food quantity} goods"
// Input
// •	You will be receiving lines until you receive the "Complete" command.
// •	The input will always be valid.
// Output
// •	Print the stock availability in the format described above.
// •	Print the amount of all sold food in the format described above.





function bakeryShop(inputArr) {

    let stockObj = {};
    let soldFood = 0;

    let index = 0;
    while (inputArr[index] !== `Complete`) {

        let [command, quantity, food] = inputArr[index].split(` `);
        quantity = Number(quantity);

        if (command === `Receive`) {

            if (!stockObj[food]) stockObj[food] = 0;

            if (quantity > 0) stockObj[food] += quantity;

        } else if (command === `Sell`) {

            if (!stockObj[food]) {
                console.log(`You do not have any ${food}.`);

            } else if (stockObj[food] < quantity) {
                console.log(`There aren't enough ${food}. You sold the last ${stockObj[food]} of them.`);
                soldFood += stockObj[food];
                delete stockObj[food];
            } else {
                stockObj[food] -= quantity;
                console.log(`You sold ${quantity} ${food}.`);
                soldFood += quantity;

                if (stockObj[food] === 0) delete stockObj[food];
            }
        }
        index++;
    }
    for (const [food, quantity] of Object.entries(stockObj)) {

        console.log(`${food}: ${quantity}`);
    }

    console.log(`All sold: ${soldFood} goods`);
}
bakeryShop([
`Receive 10 muffins`,
`Receive 23 bagels`,
`Sell 5 muffins`,
`Sell 10 bagels`,
`Complete`
]);
