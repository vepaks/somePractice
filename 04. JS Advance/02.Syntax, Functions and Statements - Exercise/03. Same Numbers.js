sameNumbers(2222222);
sameNumbers(1234);
function sameNumbers(number) {
  let numToString = number.toString();
  let sum = 0;
  let isSame = true;
  let firstLetter = numToString[0];

  for (let i = 0; i < numToString.length; i++) {
    if (firstLetter !== numToString[i]) {
      isSame = false;
    } else {
      isSame = true;
    }
    sum += Number(numToString[i]);
  }
  console.log(isSame);
  console.log(sum);
}

