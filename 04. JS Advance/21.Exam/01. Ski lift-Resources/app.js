window.addEventListener("load", solve);

function solve() {
  //take the variables from DOM elements
  //inputValue
  let firstName = document.querySelector("#first-name"),
    lastName = document.querySelector("#last-name"),
    peopleCount = document.querySelector("#people-count"),
    fromDate = document.querySelector("#from-date"),
    daysCount = document.querySelector("#days-count"),
    ul = document.querySelector(".ticket-info-list"),
    divMain = document.querySelector("#main"),
    body = document.querySelector("body");

  //buttons
  const nextBtn = document.querySelector("#next-btn");

  const li = document.createElement("li"),
    article = document.createElement("article"),
    h3 = document.createElement("h3"),
    p1 = document.createElement("p"),
    p2 = document.createElement("p"),
    p3 = document.createElement("p"),
    editBtn = document.createElement("button"),
    continueBtn = document.createElement("button"),
    confirmBtn = document.createElement("button"),
    cancelBtn = document.createElement("button");

  nextBtn.addEventListener("click", function (el) {
    el.preventDefault();
    if (
      firstName.value &&
      lastName.value &&
      peopleCount.value &&
      fromDate.value &&
      daysCount.value &&
      isFinite(peopleCount.value) &&
      isFinite(daysCount.value)
    ) {
      const firstNameValue = firstName.value;
      const lastNameValue = lastName.value;
    cleanInputs();
      const peopleCountValue = peopleCount.value;
      const fromDateValue = fromDate.value;
      const daysCountValue = daysCount.value;

      nextBtn.disabled = true;
      ul.appendChild(li);
      showInputs();
      article.appendChild(editBtn);
      article.appendChild(continueBtn);
      editBtn.textContent = "Edit";
      editBtn.classList.add("edit-btn");
      continueBtn.classList.add("continue-btn");
      continueBtn.textContent = "Continue";

      // li.classList.add("ticket");
      // li.appendChild(article);
      // article.appendChild(h3);
      // article.appendChild(p1);
      // article.appendChild(p2);
      // article.appendChild(p3);
      // article.appendChild(editBtn);
      // article.appendChild(continueBtn);
      // editBtn.textContent = "Edit";
      // editBtn.classList.add("edit-btn");
      // continueBtn.classList.add("continue-btn");
      // continueBtn.textContent = "Continue";
      //
      // h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
      // p1.textContent = `From date: ${fromDate.value}`;
      // p2.textContent = `For ${daysCount.value} days`;
      // p3.textContent = `For ${peopleCount.value} people`;

      editBtn.addEventListener("click", function (el) {
        el.preventDefault();
        nextBtn.disabled = false;
        firstName.value = firstNameValue;
        lastName.value = lastNameValue;
        peopleCount.value = peopleCountValue;
        fromDate.value = fromDateValue;
        daysCount.value = daysCountValue;
        li.remove();
      });

      continueBtn.addEventListener("click", function (el) {
        el.preventDefault();
        li.remove();
        const ulConfirmed = document.querySelector(".confirm-ticket");
        ulConfirmed.appendChild(li);
        showInputs();
        article.removeChild(editBtn);
        article.removeChild(continueBtn);
        article.appendChild(confirmBtn);
        article.appendChild(cancelBtn);
        confirmBtn.textContent = "Edit";
        cancelBtn.classList.add("edit-btn");
        confirmBtn.classList.add("confirm-btn");
        cancelBtn.textContent = "cancel-btn";
        confirmBtn.textContent = "Confirm";
        cancelBtn.textContent = "Cancel";
      });

      cancelBtn.addEventListener("click", function (el) {
        el.preventDefault();
        li.remove();
      });

      confirmBtn.addEventListener("click", function (el) {
        el.preventDefault();
        divMain.remove();
        const h1 = document.createElement("h1");
        const button = document.createElement("button");

        body.appendChild(h1);
        body.appendChild(button);

        button.id = "back-btn";
        h1.id = "thank-you";
        h1.textContent = "Thank you, have a nice day!";
        button.textContent = "Back";
      });

      const backBtn = document.querySelector("#back-btn");
      backBtn.addEventListener("click", function (el) {});
    }
  });

  function cleanInputs() {
    nextBtn.disabled = true;
    firstName.value = "";
    lastName.value = "";
    peopleCount.value = "";
    fromDate.value = "";
    daysCount.value = "";
  }

  function showInputs() {
    li.classList.add("ticket");
    li.appendChild(article);
    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);

    h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
    p1.textContent = `From date: ${fromDate.value}`;
    p2.textContent = `For ${daysCount.value} days`;
    p3.textContent = `For ${peopleCount.value} people`;
  }
}
