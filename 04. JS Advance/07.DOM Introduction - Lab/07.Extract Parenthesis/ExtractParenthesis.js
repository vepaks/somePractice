function sumTable() {
  const pattern = /\(.+?\)/g;
  const text = document.getElementById("content");
  return [...text.textContent.matchAll(pattern)].join(";");
}

function extract(content) {

  const text = document.getElementById(content).textContent;  // Взимаме съдържанието на елемента с id content
  let result = "";                                            // Правим променлива, в която ще пазим резултата

  const pattern = /\((?<word>\w+(\s*\w+)*)\)/g;               // Изваждаме всички думи, които започват с ( и свършват с )
  let match = pattern.exec(text);                             // Вадим съвпаденията

  while (match !== null) {                                    // Докато има съвпадения
    result += match.groups.word + "; ";                     // Към резултата добавяме съвпадението + ; и интервал
    match = pattern.exec(text);                             // Подменяме съвпадението
  }

  return result.trim();                                      // Връщаме резултата като махаме последното разстояние
}

function extract(content) {

  const text = document.getElementById(content).textContent;
  let result = "";

  const pattern = /\((.+?)\)/g;
  let match = pattern.exec(text);

  while (match !== null) {
    result += match[1] + "; ";
    match = pattern.exec(text);
  }

  return result;
}

function sumTable() {
  const pattern = /\(.+?\)/g;
  const text = document.getElementById("content");
  return Array.from(text.textContent.matchAll(pattern)).join(";");
}

