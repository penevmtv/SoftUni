// You’ve beaten all the content and the last thing left to accomplish is to own a legendary item. However, it’s a tedious process and 
// requires quite a bit of farming. Anyway, you are not too pretentious – any legendary will do. The possible items are:
// •	"Shadowmourne" – requires 250 Shards
// •	"Valanyr" – requires 250 Fragments
// •	"Dragonwrath" – requires 250 Motes
// "Shards", "Fragments", and "Motes" are the key materials, all else is junk. 
// You will be given lines of input in the format: 
// "{quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}"
// Keep track of the key materials - the first that reaches the 250 mark wins the race. At that point, print the corresponding legendary obtained. 
// Then, print the remaining shards, fragments, motes, ordered by quantity in descending order, then by name in ascending order, each on a new line.
//  Finally, print the collected junk items, in alphabetical order.
// Input
// •	Each line comes in the following format:
// {quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}
// Output
// •	On the first line, print the obtained item in format: "{Legendary item} obtained!"
// •	On the next three lines, print the remaining key materials in descending order by quantity
// o	If two key materials have the same quantity, print them in alphabetical order
// •	On the final several lines, print the junk items in alphabetical order
// o	All materials are printed in format "{material}: {quantity}"
// o	All output should be lowercase, except the first letter of the legendary




function legendaryFarming(string) {
    let itemMap = new Map([
        [`shards`, 0],
        [`fragments`, 0],
        [`motes`, 0]
    ]);

    let junkMap = new Map();

    let inputArr = string.split(` `);

    let winMaterial;

    for (let i = 0; i < inputArr.length; i += 2) {
        let quantity = Number(inputArr[i]);
        let material = inputArr[i + 1].toLowerCase();

        if (itemMap.has(material)) {
            let currentQuantity = itemMap.get(material);
            let newQuantity = currentQuantity + quantity;

            if (newQuantity >= 250) {
                winMaterial = material;
                newQuantity -= 250;
                itemMap.set(material, newQuantity);
                break;
            } else itemMap.set(material, newQuantity);

        } else {
            if (!junkMap.has(material)) {
                junkMap.set(material, quantity);
            } else {
                let currentQuantity = junkMap.get(material);
                let newQuantity = currentQuantity + quantity;

                junkMap.set(material, newQuantity);
            }
            
        }
    }

    let legendaryItem;

    switch (winMaterial) {
        case `shards`:
            legendaryItem = `Shadowmourne`;
            break;
        case `fragments`:
            legendaryItem = `Valanyr`;
            break;
        case `motes`:
            legendaryItem = `Dragonwrath`;
            break;
    }

    console.log(`${legendaryItem} obtained!`);

    let sortedKeyMaterials = [...itemMap.entries()].sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    for (let [material, quantity] of sortedKeyMaterials) {
        console.log(`${material}: ${quantity}`);
    }

    let sortedJunk = [...junkMap.entries()].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [junk, quantity] of sortedJunk) {
        console.log(`${junk}: ${quantity}`);
    }
    
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
