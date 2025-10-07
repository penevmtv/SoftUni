// Write a JS function that scans a given HTML list and appends all collected list items’ text
//  to a textarea on the same page when the user clicks on a button.

// Input / Output
// There will be no Input / Output, your program should instead modify the DOM of the given HTML document.



function extractText() {
    let list = document.querySelectorAll("#items li");
    let textarea = document.querySelector("#result");
    
    for (let element of list) {
        textarea.value += element.textContent + "\n";
    }
}
