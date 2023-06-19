function addItem() {
  const inputText = document.querySelector("#newItemText");
  const items = document.querySelector("#items");
  const li = document.createElement("li");

  li.textContent = inputText.value;
  items.appendChild(li);
  inputText.value = "";
}
