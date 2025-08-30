// Write a function, which takes the output from the previous task and turns it back into a string.
// Until you receive the line “end”, you will receive several lines of input on the console, in the following format:
// •	"{letter}:{index1}/{index2}/{index…}/{indexN}"
// Your task is to take every letter and its index and form a string out of them.




function deserializeString(arrOfStrs) {

    let outputArr = [];
    let index = 0;
    while (arrOfStrs[index] !== `end`) {
        const [char, positionsStr] = arrOfStrs[index].split(`:`);

        const positionArr = positionsStr.split(`/`).map(Number);
        
        for (const position of positionArr) {
            outputArr[position] = char;
        }

        index++;
    }
    
    console.log(outputArr.join(``));
}
deserializeString([
'a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end'
]);
