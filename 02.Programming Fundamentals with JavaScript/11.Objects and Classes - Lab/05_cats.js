// Write a function that receives array of strings in the following format '{cat name} {age}'.
// Create a Cat class that receives in the constructor the name and the age parsed from the input.
// It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.
// For each of the strings provided, you must create a cat object and invoke the .meow () method. 



function cats(arrOfCats) {
    class Cats {
        constructor(catName, catAge) {
            this.catName = catName;
            this.catAge = catAge
        }

        meow() {
            return `${this.catName}, age ${this.catAge} says Meow`;
        }
    }


    for (let catStr of arrOfCats) {
        let [cat, age] = catStr.split(` `);

        let catObj = new Cats(cat, age);
        console.log(catObj.meow());
    }
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
