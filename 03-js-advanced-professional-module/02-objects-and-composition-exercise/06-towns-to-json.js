// You're tasked to create and print a JSON from a text table. 
// You will receive input as an array of strings, where each string represents a row of a table,
//   with values on the row encompassed by pipes "|" and optionally spaces. 
// The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". 
// The Latitude and Longitude columns will always contain valid numbers.
// Input
// The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
// Output
// •	The output should be an array of objects wrapped in JSON.stringify(). 
// •	Latitude and Longitude must be parsed to numbers, and represented till the second digit after the decimal point!




function townsToJson(arrOfStrs) {

    function splitElement(element) {
        return element.split(`|`).slice(1).map(str => str.trim());
    }

    const workingArr = arrOfStrs.slice();
    const [town, latitude, longitude] = splitElement(workingArr.shift());

    const resultArr = [];
    for (const element of workingArr) {
        let [townName, latitudeNum, longitudeNum] = splitElement(element);
        latitudeNum = Number(latitudeNum).toFixed(2);
        longitudeNum = Number(longitudeNum).toFixed(2);

        resultArr.push({ [town]: townName, [latitude]: Number(latitudeNum), [longitude]: Number(longitudeNum)});
    }
    console.log(JSON.stringify(resultArr));
}
townsToJson([
'| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'
]);
