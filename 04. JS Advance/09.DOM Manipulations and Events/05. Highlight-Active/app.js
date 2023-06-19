// function focused() {
//   const inputText = document.querySelectorAll("input");
//   const inputArr = Array.from(inputText);
//   for (const inputTextElement of inputArr) {
//     inputTextElement.addEventListener("focus", () => {
//       inputTextElement.parentElement.classList.add("focused");
//     });
//
//     inputTextElement.addEventListener("blur", () => {
//       inputTextElement.parentElement.classList.remove("focused");
//     });
//   }
// }

function focused() {
  const parent = document.querySelector("div");

  parent.addEventListener("focusin", fucused);
  parent.addEventListener("focusout", blurred);

  function fucused(event) {
    event.target.parentElement.classList.add("focused");
  }

  function blurred(event) {
    event.target.parentElement.classList.remove("focused");
  }
}
