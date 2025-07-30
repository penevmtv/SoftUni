//You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), 
//and every even – quantity. Your task is to collect the resources and print them each on a new line. 
//Print the resources and their quantities in the format:
//{resource} –> {quantity}
//The quantities inputs will be in the range [1 … 2 000 000 000].




function minerTask(arrOfStrs){
    let resourcesMap = new Map();
    for (let i = 0; i < arrOfStrs.length; i += 2) {
        let resource = arrOfStrs[i];
        let quantity = (i + 1) === arrOfStrs.length ? 0 : Number(arrOfStrs[i + 1]);
        if (resourcesMap.has(resource)) {
            resourcesMap.set(resource, resourcesMap.get(resource) + quantity);
        } else {
            resourcesMap.set(resource, quantity);   
        }
    }
    for(let [resource, quantity] of resourcesMap.entries()) {
        console.log(`${resource} -> ${quantity}`);
    }
}
minerTask([
'gold',
'155',
'silver',
'10',
'copper',
'17',
'gold',
'15'
]);
