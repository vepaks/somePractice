fruitCost("orange", 2500, 1.8);
fruitCost("apple", 1563, 2.35);

function fruitCost(fruit, weight, money) {
    let kilograms = weight / 1000;
    let sum = kilograms * money;

  console.log(`I need $${sum.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}
