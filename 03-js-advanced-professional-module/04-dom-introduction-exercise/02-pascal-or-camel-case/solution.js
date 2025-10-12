// An HTML file is given and your task is to write a function that takes two string parameters
//  as an input and transforms the first parameter to the type required by the second parameter.
// •	The first parameter will be the text that you need to modify depending on the second parameter. 
// The words in it will always be separated by space.
// •	The second parameter will be either "Camel Case" or "Pascal Case". 
// In case of different input, your output should be "Error!"
// When the button is clicked the function should convert the first string to either of the cases. 
// The output should consist of only one word - the string you have modified. Once your output is done,
//  you should set it as HTML to the <span> element.




function solve() {
  const text = document.getElementById('text').value.toLowerCase();
  const convention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  function convert(input, conv) {
    let result;
    switch (conv) {
      case 'Camel Case':
        result = input.split(' ').map((str, idx) => idx > 0 ? str[0].toUpperCase() + str.slice(1) : str).join('');
        break;
      case 'Pascal Case':
        result = input.split(' ').map(str => str[0].toUpperCase() + str.slice(1)).join('');
        break;
      default:
        result = 'Error!';
        break;
    }
    return result;
  }
  result.textContent = convert(text, convention);
}
