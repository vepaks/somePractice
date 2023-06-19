function solve() {
  const input = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  const toPascal = (text) =>
    text
      .split(" ")
      .map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase())
      .join("");

  const toCamelCase = (text)  => {
      text = toPascal(text);
      return text[0].toLowerCase() + text.slice(1);
    };
  if (convention === 'Pascal Case') {
      result.textContent = toPascal(input);

  } else if (convention === 'Camel Case') {
      result.textContent = toCamelCase(input);
  } else {
      result.textContent = 'Error!';
  }

}

function solve1() {

    let text = document.getElementById("text").value.toLocaleLowerCase().split(" ");
    // Взимаме текста и неговото value правим го на малки букви и го делим по разстояние като получаваме масив
    let namingConvention = document.getElementById("naming-convention").value;
    // Взимаме името на конвенцията и нейната стойност от инпут полето

    let output = "";        // Правим променлива, в която ще пазим резултата

    if (namingConvention === "Camel Case") {        // Ако е Camel Case
        output += text[0];                          // Добавяме първата дума както е с малка буква

        for (let i = 1; i < text.length; i++) {     // Въртим цикъл от следващата дума до края
            output += text[i].charAt(0).toLocaleUpperCase() + text[i].substring(1);
            // Добавяме думите като първата буква я променяме на главна и взимаме останалата част от думата
        }

    } else if (namingConvention === "Pascal Case") {    // Ако е Pascal Case

        for (let i = 0; i < text.length; i++) {
            output += text[i].charAt(0).toLocaleUpperCase() + text[i].substring(1);
        }

    } else {                // Ако е различна от посочените две
        output = "Error!";  // сетваме outputa на Грешка
    }

    document.getElementById("result").textContent = output; // Променяме text content-a на елемента с id result
}
