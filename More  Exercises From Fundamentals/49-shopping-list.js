// It's the end of the week, and it is time for you to go shopping, so you need to create a shopping list first.
// Input
// You will receive an initial list with groceries separated by an exclamation mark "!".
// After that, you will be receiving 4 types of commands until you receive "Go Shopping!".
// •	"Urgent {item}" - add the item at the start of the list.  If the item already exists, skip this command.
// •	"Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
// •	"Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
// •	"Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.
// Constraints
// •	There won't be any duplicate items in the initial list.
// Output
// •	Print the list with all the groceries, joined by ", ":
// "{firstGrocery}, {secondGrocery}, … {nthGrocery}"




function shoppingList(inputArr) {
    let itemsListArr = inputArr[0].split(`!`);

    let index = 1;
    while (inputArr[index] !== `Go Shopping!`) {
        const [command, ...itemInfo] = inputArr[index].split(` `);

        if (command === `Urgent`) {
            const item = itemInfo[0];

            if (!itemsListArr.includes(item)) {
                itemsListArr.unshift(item);
            }

        } else if (command === `Unnecessary`) {
            const item = itemInfo[0];

            if (itemsListArr.includes(item)) {

                itemsListArr =itemsListArr.filter(x => x !== item);

                // Another method for removing:

                // const itemIndex = itemsListArr.indexOf(item);
                // itemsListArr.splice(itemIndex, 1);
            }

        } else if (command === `Correct`) {
            const [oldItem, newItem] = itemInfo;

            if (itemsListArr.includes(oldItem)) {
                const oldItemIndex = itemsListArr.indexOf(oldItem);
                itemsListArr[oldItemIndex] = newItem;

                // Another method for replacing:

                // itemsListArr = itemsListArr.map(x => x === oldItem ? newItem : x);
            }

        } else if (command === `Rearrange`) {
            const item = itemInfo[0];
            if (itemsListArr.includes(item)) {
                const itemIndex = itemsListArr.indexOf(item);
                itemsListArr.splice(itemIndex, 1);
                itemsListArr.push(item);

                // Another method for Rearranging:

                // itemsListArr = itemsListArr.filter(x => x !== item);
                // itemsListArr.push(item);
            }
        }
        index++;
    }
    console.log(itemsListArr.join(`, `));
}
shoppingList([
"Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"
]);
