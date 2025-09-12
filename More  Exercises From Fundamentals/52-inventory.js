// As a young traveler, you gather items and craft new items.
// Input / Constraints
// You will receive a journal with some collecting items, separated with a comma and a space (", "). 
// After that, until receiving "Craft!" you will be receiving different commands split by " - ":
// •	"Collect - {item}" - you should add the given item to your inventory. If the item already exists, you should skip this line.
// •	"Drop - {item}" - you should remove the item from your inventory if it exists.
// •	"Combine Items - {old_item}:{new_item}" - you should check if the old item exists. 
// If so, add the new item after the old one. Otherwise, ignore the command.
// •	"Renew – {item}" – if the given item exists, you should change its position and put it last in your inventory.
// Output
// After receiving "Craft!" print the items in your inventory, separated by ", ".




 function inventory(itemsArr) {
    let inventory = [];

    let index = 0;
    while (itemsArr[index] !== `Craft!` && index < itemsArr.length) {
        const element = itemsArr[index];

        if (element.includes(`, `)) {
            element.split(`, `).forEach(x => inventory.push(x));  

        } else if (element.includes(` - `)) {
            const [command, data] = element.split(` - `);
            
            if (command === `Collect`) {
                if (!inventory.includes(data)) inventory.push(data);

            } else if (command === `Drop`) {
                if (inventory.includes(data)) inventory = inventory.filter(x => x !== data);

            } else if (command === `Combine Items`) {
                const [oldItem, newItem] = data.split(`:`);

                if (inventory.includes(oldItem)) {
                    const idxOldItem = inventory.indexOf(oldItem);
                    inventory.splice(idxOldItem + 1, 0, newItem);
                }

            } else if (command === `Renew`) {

                if (inventory.includes(data)) {
                    inventory = inventory.filter(x => x !== data);
                    inventory.push(data);
                }
            }
        }
        index++;
    }
    console.log(inventory.join(`, `));
 }
inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!'
]);
