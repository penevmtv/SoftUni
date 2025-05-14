function solve(arr) {
  let nClients = Number(arr[0]);
  let index = 1;
  let allClientsPrice = 0;
  for (let currentClient = 1; currentClient <= nClients; currentClient++) {
    let productCounter = 0;
    let priceFor1Client = 0;
    while (arr[index] !== `Finish`) {
      let product = arr[index];
      productCounter++;
      switch (product) {
        case `basket`:
          priceFor1Client += 1.50;
          break;
        case `wreath`:
          priceFor1Client += 3.80;
          break;
        case `chocolate bunny`:
          priceFor1Client += 7;
          break;
      }
      index++;
    }
    index++;
    if (productCounter % 2 === 0) 
      priceFor1Client *= 0.8;
      allClientsPrice += priceFor1Client;
    console.log(`You purchased ${productCounter} items for ${priceFor1Client.toFixed(2)} leva.`);
  }
  let averagePriceFor1Client = allClientsPrice / nClients;
  console.log(`Average bill per client is: ${averagePriceFor1Client.toFixed(2)} leva.`);
}