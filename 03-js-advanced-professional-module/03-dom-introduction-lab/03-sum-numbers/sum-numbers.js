// Write a JS function that reads two numbers from input fields in a web page and puts their
//  sum in another field when the user clicks on a button.
// Input / Output
// There will be no Input / Output, your program should instead modify the DOM of the given HTML document.




function calc() {
    const firstNum = Number(document.querySelector('#num1').value);   
    const secondNum = Number(document.querySelector('#num2').value); 
    
    document.querySelector('#sum').value = firstNum + secondNum;
}
