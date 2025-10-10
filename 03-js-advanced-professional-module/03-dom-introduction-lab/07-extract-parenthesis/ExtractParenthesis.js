// Write a JS function that when executed, extracts all parenthesized text from a target paragraph by given element ID. 
// The result is a string, joined by "; " (semicolon, space).
// Input
// Your function will receive a string parameter, representing the target element ID, from which text must be extracted. 
// The text should be extracted from the DOM.
// Output
// Return a string with all matched text, separated by "; " (semicolon, space).




function extract() {  
    const element = document.querySelector('#content');
    const text = element.textContent;
    const matches = [...text.matchAll(/\((.*?)\)/g)];
    const result = matches.map(match => match[1]).join('; ');
    
    console.log(result);
    alert(result);
    
    return result;
}
