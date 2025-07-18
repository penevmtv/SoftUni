// Write a function that receives a single string - the path to a file (the '\' character is escaped)
// Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as 
//     template.bak should be the file name, while pptx is the extension).





function extractFile(string) {

    let lastDivisionIndex = string.lastIndexOf(`\\`);
    let fileString = string.substring(lastDivisionIndex + 1);

    let lastDotIndex = fileString.lastIndexOf(`.`);
    let fileName = fileString.substring(0, lastDotIndex);
    let extension = fileString.substring(lastDotIndex + 1);

    return `File name: ${fileName}\nFile extension: ${extension}`;
}
console.log(extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs'));