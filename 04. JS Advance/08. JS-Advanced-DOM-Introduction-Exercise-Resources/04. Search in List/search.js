function search() {
    const itemsArr = document.getElementById('towns').children;
    const inputText = document.getElementById('searchText').value;
    const resultDiv = document.getElementById('result');
    const townsArr = [];
    let matchCount = 0;

    for (let i = 0; i < itemsArr.length; i++) {
        let town = itemsArr[i].textContent;
        townsArr.push(town);
    }

    for (let i = 0; i < townsArr.length; i++) {
      if (townsArr[i].includes(inputText)) {
        itemsArr[i].style.fontWeight = "bold";
        itemsArr[i].style.textDecoration = "underline";
        matchCount++;
      } else {
        itemsArr[i].style.fontWeight = "normal";
        itemsArr[i].style.textDecoration = "none";
      }

      resultDiv.textContent = `${matchCount.toString()} matches found`;
    }
}