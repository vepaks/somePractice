function sort(arr, ask) {
  let result = [];

  if (ask === "asc") {
    result = arr.sort((a, b) => a - b);
  } else if (ask === "desc") {
    result = arr.sort((a, b) => b - a);
  }
  return result;
}

sort([14, 7, 17, 6, 8], "asc");
sort([14, 7, 17, 6, 8], "desc");
