function green(meters2) {
  let price = meters2 * 7.61;
  let discount = price * 0.18;
  let finalePrice = price - discount;
  console.log(`The final price is: ${finalePrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}