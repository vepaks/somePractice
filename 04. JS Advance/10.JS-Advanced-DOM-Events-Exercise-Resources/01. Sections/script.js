function create(words) {
  const content = document.querySelector("#content");

  words.forEach((el) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = el;
    p.style.display = "none";
    content.appendChild(div);
    div.appendChild(p);
    div.addEventListener("click", (el) => {
      el.target.querySelector("p").style.display = "block";
    });
  });
}
