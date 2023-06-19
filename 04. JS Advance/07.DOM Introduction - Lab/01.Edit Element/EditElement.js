const ref = document.querySelector("#e1");
const button = document.querySelector("button");

function EditElement(match, replacer) {
  const text = ref.textContent;
  let result;
  result = text.split(match).join(replacer);
  ref.textContent = result;
}

button.addEventListener("click", () => {
  EditElement("%insert name here%", "Document Object Model!");
});
