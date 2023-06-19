function attachEventsListeners() {
  // take the variables from DOM
  const daysInput = document.querySelector("#days"),
    daysBtn = document.querySelector("#daysBtn"),
    hoursInput = document.querySelector("#hours"),
    hoursBtn = document.querySelector("#hoursBtn"),
    minutesInput = document.querySelector("#minutes"),
    minutesBtn = document.querySelector("#minutesBtn"),
    secondsInput = document.querySelector("#seconds"),
    secondsBtn = document.querySelector("#secondsBtn");

  //add a listener to the buttons
  daysBtn.addEventListener("click", convert);
  hoursBtn.addEventListener("click", convert);
  minutesBtn.addEventListener("click", convert);
  secondsBtn.addEventListener("click", convert);

  //calculation function
  function convert(e) {
    const input = e.target.parentNode.querySelector("input[type=text]");
    const inputValue = Number(input.value);
    const inputId = input.id;

    switch (inputId) {
      case "days":
        hoursInput.value = inputValue * 24;
        minutesInput.value = inputValue * 1440;
        secondsInput.value = inputValue * 86400;
        break;
      case "hours":
        daysInput.value = inputValue / 24;
        minutesInput.value = inputValue * 60;
        secondsInput.value = inputValue * 3600;
        break;
      case "minutes":
        daysInput.value = inputValue / 1440;
        hoursInput.value = inputValue / 60;
        secondsInput.value = inputValue * 60;
        break;
      case "seconds":
        daysInput.value = inputValue / 86400;
        hoursInput.value = inputValue / 3600;
        minutesInput.value = inputValue / 60;
        break;
    }
  }
}
