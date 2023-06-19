stringLenghtSum("chocolate", "ice cream", "cake");
stringLenghtSum("pasta", "5", "22.3");

function stringLenghtSum(strinOne, stringTwo, stringThree) {
  let sum;
  let averageStringLenght;

  sum = strinOne.length + stringTwo.length + stringThree.length;
  averageStringLenght = Math.floor(sum / 3);
  console.log(sum);
  console.log(averageStringLenght);
}
