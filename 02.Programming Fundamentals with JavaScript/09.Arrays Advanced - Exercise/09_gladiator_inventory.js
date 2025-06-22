//As a gladiator, Peter has a cool Inventory. He loves to buy new equipment. You are given Peter’s inventory 
//with all of his equipment -> strings, separated by whitespace. 

//You may receive the following commands:

//•	Buy {equipment}
//•	Trash {equipment}
//•	Repair {equipment}
//•	Upgrade {equipment}-{upgrade}
//If you receive the Buy command, you should add the equipment at the last position in the inventory, but only if it isn't bought already.
//If you receive the Trash command, delete the equipment if it exists.
//If you receive the Repair command, you should repair the equipment if it exists and place it in the last position.
//If you receive the Upgrade command, you should check if the equipment exists and insert after 
//it the upgrade in the following format: "{equipment}:{upgrade}".
//Input / Consrtaints
//You will receive an array of strings. Each element of the array is a command.
//•	In the first input element, you will receive Peter's inventory – a sequence of equipment names, separated by space.
//Output
//As output, you must print Peter's inventory on one line, separated by a space. 
//Constraints
//•	The command will always be valid.
//•	The equipment and Upgrade will be strings and will contain any character, except '-'.
//•	Allowed working time / memory: 100ms / 16MB.


function gladiatorInventory(arrOfStr) {
  let arrOfInventar = arrOfStr.shift().split(` `);
  
  for (let command of arrOfStr) {
    let equipment = command.split(` `).pop();
    if (command.includes(`Buy`) && !arrOfInventar.includes(equipment)) {
      arrOfInventar.push(equipment);
    } else if (command.includes(`Trash`) && arrOfInventar.includes(equipment)) {
      let equipmentIndex = arrOfInventar.indexOf(equipment);
      arrOfInventar.splice(equipmentIndex, 1);
    } else if (command.includes(`Repair`) && arrOfInventar.includes(equipment)) {
      let equipmentIndex = arrOfInventar.indexOf(equipment);
      arrOfInventar.splice(equipmentIndex, 1);
      arrOfInventar.push(equipment);
    } else if (command.includes(`Upgrade`)) {
      let [originEquipment, upgrade] = equipment.split(`-`);
      if (arrOfInventar.includes(originEquipment)) {
        let indexOfOriginEquipment = arrOfInventar.indexOf(originEquipment);
        let strUpgrade = equipment.split(`-`).join(`:`);
        arrOfInventar.splice(indexOfOriginEquipment + 1, 0, strUpgrade);
      }
    }
  }
  return arrOfInventar.join(` `);
}
console.log(gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'
]));