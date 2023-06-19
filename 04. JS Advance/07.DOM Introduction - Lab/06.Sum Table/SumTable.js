function sumTable() {

    // Изваждаме всички редове от таблицата и ги правим на масив
    const rows = Array.from(document.querySelectorAll("table tr"));
    let sum = 0; // Правим си променлива да събираме сумата

    // Минаваме по редовете като махаме първия и последния
    for (let i = 1; i < rows.length - 1; i++) {
        sum += Number(rows[i].lastElementChild.textContent);
        // Намираме на всеки ред последното дете и взимаме съдържанието като го правим на число и го добавяме към сумата
    }

    document.getElementById("sum").textContent = sum;   // Променяме съдържанието на id sum с получената сума
}

function sumTable() {
    const sum = document.getElementById("sum");
    const rows = document.querySelectorAll("tr");
    let sumOfRows = 0;
    for (let i = 1; i < rows.length; i++){
        const price = rows[i].children[1].textContent;
        sumOfRows += Number(price);
    }
    sum.textContent = sumOfRows;
}