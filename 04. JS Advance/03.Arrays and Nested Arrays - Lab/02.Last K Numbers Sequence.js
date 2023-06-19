list(6, 3);
list(8, 2);
function list(period, elements) {
  let arr = [1];
  for (let i = 1; i < period; i++) {
    let sum = 0;
    let lastElements = arr.slice(-elements);

    for (const lastElement of lastElements) {
      sum += Number(lastElement);
    }
    arr.push(sum);
  }
  console.log(arr);
}

function evenPositionElement(n, k) {
  const result = [1];
  for (let i = 1; i < n; i++) {
    result.push(result.slice(-k).reduce((a, b) => a + b, 0));
  }
  return result;
}