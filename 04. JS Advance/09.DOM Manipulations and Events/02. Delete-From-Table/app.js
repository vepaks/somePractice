// function deleteByEmail() {
//   const inputText = document.querySelector("label input").value,
//     rows = document.querySelectorAll("#customers tbody tr"),
//     rowsArr = Array.from(rows),
//     result = document.querySelector("#result");
//
//   let deleted = false;
//
//   for (let row of rowsArr) {
//     const col = row.children[1];
//
//     if (col.textContent === inputText) {
//       row.parentElement.removeChild(row);
//       deleted = true;
//     }
//   }
//
//   if (deleted) {
//     result.textContent = "Deleted";
//   } else {
//     result.textContent = "Not found";
// //   }
//
//   inputText.value = "";
// }

function deleteByEmail() {
  let input = document.getElementsByTagName("input")[0];
  // Взимаме референция към инпут полето по името на тага, връща HTML collection и взимаме нулевия елемент
  let rows = document.querySelectorAll("tbody tr"); // Взимаме всички редове от таблицата
  let result = document.getElementById("result"); // Взимаме реф към див-а с id result

  for (let row of rows) {
    // Минаваме по редовете на таблицата
    if (input.value === row.children[1].textContent) {
      // Ако стойността на въведеното е равно на съдържанието в колона 2 от таблицата
      result.textContent = "Deleted."; // Променяме да изпише Deleted
      row.parentElement.removeChild(row); // Намираме родителя на row и му казваме да изтрие детето row
    } else {
      // Ако не намерим съвпадение в имейлите
      result.textContent = "Not found."; // Изписваме, че не е намерен
    }
  }
  input.value = ""; // Изчистваме инпут полето
}
