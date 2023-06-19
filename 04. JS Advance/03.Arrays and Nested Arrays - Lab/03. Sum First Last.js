sumFirstLast(["20", "30", "40"]);
sumFirstLast(["5", "10"]);

function sumFirstLast1(arr) {
  return Number(arr[0]) + Number(arr[arr.length - 1]);
}

function sumFirstLast(array) {
  const first = Number(array.shift());
  const last = Number(array.pop());
  return first + last;
}


