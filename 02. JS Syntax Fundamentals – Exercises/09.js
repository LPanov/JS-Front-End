function fruit(fruitName, weight, priceKg) {
    let money = 0;
    money = weight/1000 * priceKg;

    console.log(`I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruitName}.`);
}