mathOperations(5, 6, "+");
mathOperations(3, 5.5, "*");
function mathOperations(a, b, operator) {
  if (operator === "+") {
    console.log(a + b);
  } else if (operator === "*") {
    console.log(a * b);
  } else if (operator === "-") {
    console.log(a - b);
  } else if (operator === "/") {
    console.log(a / b);
  } else if (operator === "%") {
    console.log(a % b);
  } else if (operator === "**") {
    console.log(a ** b);
  }
}
