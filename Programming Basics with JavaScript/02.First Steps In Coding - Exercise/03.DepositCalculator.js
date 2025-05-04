function convertor(depositSum, months, percentForYear) {
  let percentForMonth = percentForYear / 12;
  let allSum = depositSum + depositSum * months * (percentForMonth / 100);
  console.log(allSum);
}