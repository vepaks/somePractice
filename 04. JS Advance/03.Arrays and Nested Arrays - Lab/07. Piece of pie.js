pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],

  "Key Lime Pie",
  "Lemon Meringue Pie"
);
function pieceOfPie(array, start, end) {
    const startIndex = array.indexOf(start), endIndex = array.indexOf(end),
        result = array.slice(startIndex, endIndex + 1);
    return result;
}
