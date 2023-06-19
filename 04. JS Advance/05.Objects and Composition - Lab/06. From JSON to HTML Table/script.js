window.onload = function () {
  let container = document.getElementById("wrapper");
  container.innerHTML = fromJSONToHTMLTable([
    '[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]',
  ]);
};

function fromJSONToHTMLTable(input) {
  const result = [];
  result.push("<table>");
  const data = JSON.parse(input);
  const props = Object.keys(data[0]);
  result.push(`  <tr>${props.map((p) => `<th>${p}</th>`).join("")}</tr>`);

  for (const entry of data) {
    result.push(
      `  <tr>${props.map((p) => `<td>${entry[p]}</td>`).join("")}</tr>`
    );
  }
  result.push("</table>");
  return result.join("\n");
}
