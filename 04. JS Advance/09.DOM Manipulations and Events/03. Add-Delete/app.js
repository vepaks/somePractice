function addItem() {
  const inputText = document.querySelector("#newItemText"),
    items = document.querySelector("#items"),
    li = document.createElement("li"),
    a = document.createElement("a");
  function onClick() {
    li.remove();
  }

  li.textContent = inputText.value;
  a.textContent = "[Delete]";
  a.href = "#";

  items.appendChild(li);
  li.appendChild(a);
  inputText.value = "";

  a.addEventListener("click", onClick);
}
