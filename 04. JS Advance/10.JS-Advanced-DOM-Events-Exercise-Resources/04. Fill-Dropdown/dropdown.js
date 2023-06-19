function addItem() {
  //take the variables from DOM
  const inputText = document.querySelector("#newItemText"),
    inputValue = document.querySelector("#newItemValue"),
    menu = document.querySelector("#menu");

  //create an element
  menu.innerHTML += `
     <option>
        <label>
          ${inputText.value}
        </label>
        <label>
          ${inputValue.value}
        </label>
     </option>
  `;
  inputValue.value = "";
  inputText.value = "";
}
