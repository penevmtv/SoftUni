// Write a program that prints you a receipt for your new computer. You will receive the parts' prices (without tax) until
//  you receive what type of customer this is - special or regular. Once you receive the type of customer you should print the receipt.
// The taxes are 20% of each part's price you receive. 
// If the customer is special, he has a 10% discount on the total price with taxes.
// If a given price is not a positive number, you should print "Invalid price!" on the console and continue with the next price.
// If the total price is equal to zero, you should print "Invalid order!" on the console.
// Input
// •	You will receive numbers representing prices (without tax) until command "special" or "regular":
// Output
// •	The receipt should be in the following format: 
// "Congratulations you've just bought a new computer!
// Price without taxes: {total price without taxes}$
// Taxes: {total amount of taxes}$
// -----------
// Total price: {total price with taxes}$"
// Note: All prices should be displayed to the second digit after the decimal point! The discount is applied only to the total price. 
// Discount is only applicable to the final price!



function solve(arr) {
  let index = 0;
  let priceWithoutTaxes = 0;
  let totalPrice = 0;
  let taxes = 0;
  let isValidOrder = true;
  while (arr[index] !== `special`) {
    if (arr[index] === `regular`) 
      break;
    let price = Number(arr[index]);
    if (price < 0) 
      console.log(`Invalid price!`);
    else 
      priceWithoutTaxes += price;
    
    index++;
  }
  if (priceWithoutTaxes !== 0) {
    taxes = priceWithoutTaxes * 0.2;
    totalPrice = priceWithoutTaxes + taxes;
    if (arr[index] === `special`)
      totalPrice *= 0.9;
  } else 
    isValidOrder = false;
  if (isValidOrder) { 
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
  } else 
    console.log(`Invalid order!`); 
}