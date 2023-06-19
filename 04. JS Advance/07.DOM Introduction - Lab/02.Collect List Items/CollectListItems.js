// function extractText() {
//   const result = document.querySelector("#result");
//   let textArr = [];
//   const items = document.querySelectorAll("li");
//   items.forEach((el) => {
//     textArr.push(el.textContent);
//   });
//   result.textContent = textArr.join("\n");
// }

function extractText() {
    const text = document.getElementById('items');
    let textArr = Array.from(text.children);
    let result;
    result = textArr
        .map(li => li.textContent)
        .join("\n");
    const output = document.getElementById('result');
    output.textContent = result;
}