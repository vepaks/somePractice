function solve() {
  const searchText = document.querySelector("#searchField");
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
     Array.from(document.querySelectorAll("tbody tr")).forEach(
         (row) => {
            if (
                row.textContent
                    .toLowerCase()
                    .includes(searchText.value.toLowerCase().trim())
            ) {
               row.classList.add("select");
            } else {
               row.classList.remove("select");
            }
         }
     );
    searchText.value = "";
  }
}
