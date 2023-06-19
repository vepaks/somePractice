function solve() {
  const [input, output] = Array.from(document.querySelectorAll("textarea")),
    [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button")),
    tbody = document.querySelector("tbody"),
    jsonData = JSON.parse(input.value);

  const createTableFunc = () => createNewTable(jsonData, tbody),
    createBayOutput = () => buyFunc();

  generateBtn.addEventListener("click", createTableFunc);
  buyBtn.addEventListener("click", createBayOutput);

  function createNewTable(inputData, table) {
    table.innerHTML = "";
    inputData.forEach((el) => {
      table.innerHTML += `
      <td> <img src=${el.img}></td>
      <td> <p>${el.name}</p></td>
      <td> <p>${el.price}</p></td>
      <td> <p>${el.decFactor}</p></td>
      <td> <input type="checkbox"/></td>
      `;
    });
  }
  function buyFunc() {
    let checkboxes = Array.from(
      document.querySelectorAll("tbody input")
    ).filter((checkbox) => checkbox.checked);

    let boughtFurniture = [];
    let totalPrice = 0;
    let totalDecorationFactor = 0; //

    checkboxes.forEach((checkbox) => {
      let parent = checkbox.parentElement.parentElement;
      let data = Array.from(parent.querySelectorAll("p"));
      boughtFurniture.push(data[0].textContent);
      totalPrice += Number(data[1].textContent);
      totalDecorationFactor += Number(data[2].textContent);
    });

    output.textContent += `Bought furniture: ${boughtFurniture.join(", ")}\n`;
    output.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    output.textContent += `Average decoration factor: ${
      totalDecorationFactor / checkboxes.length
    }`;
  }
}
