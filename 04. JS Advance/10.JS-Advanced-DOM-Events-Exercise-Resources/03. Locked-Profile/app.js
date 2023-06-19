function lockedProfile() {
  //take the variables from DOM

  const buttons = document.querySelectorAll("button");
  const profiles = document.querySelectorAll("div.profile");

  //add a listener for each button
  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", showContent);
  });
}
//condition checks and displaying content
function showContent(event) {
  const button = event.target;
  const profile = button.parentElement;
  const hiddenFields = profile.querySelector("div");
  const locked = profile.querySelector("input[type='radio']:checked").value;
  if (locked === "unlock") {
    if (button.textContent === "Show more") {
      hiddenFields.style.display = "block";
      button.textContent = "Hide it";
    } else {
      hiddenFields.style.display = "none";
      button.textContent = "Show more";
    }
  }

  // const buttons = document.querySelectorAll(".profile button");
  //
  // Array.from(buttons).forEach((el) => {
  //   el.addEventListener("click", showContent);
  // });
  //
  // function showContent(event) {
  //   const parent = event.target.parentElement,
  //     input = parent.querySelector("div"),
  //     unlocked = parent.querySelector("input[name='user1Locked']"),
  //     profileContent = parent.querySelector("#user1HiddenFields");
  //
  //   if (unlocked.checked) {
  //     profileContent.style.display = "block";
  //     console.log("done");
  //   }
  // }
}
