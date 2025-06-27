//Write a function that receives a string in JSON format and converts it to an object.

//Loop through all the keys and print them with their values in format: "{key}: {value}"



function convertToObject(jsonStr) {
  let person = JSON.parse(jsonStr);
  for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');