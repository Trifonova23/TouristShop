function touristShop(input) {
  let budget = Number(input[0]); //will update budget aftr every purchase
  let index = 1;
  let command = input[index];
  let sumProducts = 0;
  let productCounter = 0;

  // let countProduct = 0;
  // let needMoney = 0;

  while (command !== "Stop") {
    // If diff from "Stop" print current command, raise the rating and update comman with the next ones
    // console.log(command); - for inspection only
    let nameProduct = input[index++]; //Once we raise the index we will have its price.
    // console.log(nameProduct);
    let priceProduct = Number(input[index]); //To Number
    productCounter++;
    // console.log(priceProduct);

    if (productCounter % 3 === 0) {
      // The price is 1/2 for the 3rd product
      priceProduct = priceProduct / 2;
      productCounter = 0; //we reset it and start again from 0 to chase every 3rd product
    }

    sumProducts += priceProduct;
    budget = budget - priceProduct;

    if (budget < 0) {
      console.log(`You dont have enough money!`);
      console.log(`You need ${Math.abs(budget).toFixed(2)}leva`);
      break;
    }
    index++;
    command = input[index];
  }
  if (command === "Stop") {
    console.log(
      `You bought ${productCounter} products for ${sumProducts.toFixed(
        2
      )} leva.`
    );
  }
}
touristShop([
  "153.20",
  "Backpack",
  "25.20",
  "Shoes",
  "54",
  "Sunglasses",
  "30",
  "Stop",
]);
console.log(`-------------------------`);
touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);
