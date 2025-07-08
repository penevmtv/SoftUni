// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.




function oddOccurrences(inputString) {

    let elementsArray = inputString.split(` `);
    let elementsCountingMap = new Map();

    for (let element of elementsArray) {
        element = element.toLowerCase();

        elementsCountingMap.set(element, (elementsCountingMap.get(element) || 0) + 1);

        // if (elementsCountingMap.has(element)) {
        //     let counter = elementsCountingMap.get(element);
        //     elementsCountingMap.set(element, counter + 1);
        // } else {
        //     elementsCountingMap.set(element, 1);
        // }
    }

    let sortedArray = [...elementsCountingMap.entries()].filter(x => x[1] % 2 === 1);
    let sortedElements = [];

    for (let element of sortedArray) {
        sortedElements.push(element[0]);
    }

    return sortedElements.join(` `);
}
console.log(oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));
