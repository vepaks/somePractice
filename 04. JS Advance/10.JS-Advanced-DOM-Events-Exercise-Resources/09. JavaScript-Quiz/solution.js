// function solve() {

// //take the elements from DOM
// const answers = document.querySelectorAll(".answer-text"),
//   questionSections = document.querySelectorAll("section");
//
// //create an array and counter for the correct answers
// const rightAnswers = [
//   "onclick",
//   "JSON.stringify()",
//   "A programming API for HTML and XML documents",
// ];
//
// let correctAnswers = 0;
// let answersCounter = 0;
//
// //hook a listener to the correct answer to the question
// Array.from(answers).forEach((parent) => {
//   parent.addEventListener("click", checkAnswer);
// });
//
// //check the correct answer
// function checkAnswer(event) {
//   const answer = event.target.textContent,
//     passMessage = document.querySelector("#results h1");
//   if (answer === rightAnswers[correctAnswers]) {
//     correctAnswers++;
//   }
//   //show all results, .h1 for correct answers
//   questionSections[answersCounter].classList.add("hidden");
//   answersCounter++;
//   if (answersCounter !== 3) {
//     questionSections[answersCounter].classList.remove("hidden");
//   } else {
//     //print a quiz pass message
//     if (correctAnswers === 3) {
//       document.querySelector("#results").style.display = "block";
//       passMessage.textContent = "You are recognized as top JavaScript fan!";
//     } else {
//       document.querySelector("#results").style.display = "block";
//       passMessage.textContent = `You have ${correctAnswers} right answers`;
//     }
//   }
// }
// }

// function solve() {
//   let rightAnswers = [
//     "onclick",
//     "JSON.stringify()",
//     "A programming API for HTML and XML documents",
//   ];
//   let rightAnswersCounter = 0;
//   let currentQuestion = 0;
//   let sections = document.querySelectorAll("section");
//   let result = document.querySelector("#results");
//
//   Array.from(document.querySelectorAll(".answer-text")).forEach((answer) => {
//     answer.addEventListener("click", function (e) {
//       if (rightAnswers.includes(e.target.textContent)) {
//         rightAnswersCounter++;
//       }
//
//       sections[currentQuestion].classList.add("hidden");
//       currentQuestion++;
//
//       if (currentQuestion < sections.length) {
//         sections[currentQuestion].classList.remove("hidden");
//       } else {
//         result.style.display = "block";
//         if (rightAnswersCounter === 3) {
//           document.querySelector("#results h1").textContent =
//             "You are recognized as top JavaScript fan!";
//         } else {
//           document.querySelector(
//             "#results h1"
//           ).textContent = `You have ${rightAnswersCounter} right answers`;
//         }
//       }
//     });
//   });
// }

function solve() {
  let correct = 0;

  const mapper = {
    "Question #1: Which event occurs when the user clicks on an HTML element?":
      "onclick",
    "Question #2: Which function converting JSON to string?":
      "JSON.stringify()",
    "Question #3: What is DOM?": "A programming API for HTML and XML documents",
  };

  const questions = document.querySelectorAll("h2");
  let sectionEl = Array.from(document.querySelectorAll("section"));

  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i].textContent;
    let buttons = Array.from(sectionEl[i].querySelectorAll("p"));
    buttons.forEach((el) => el.addEventListener("click", clickAnswer));

    function clickAnswer(event) {
      if (event.currentTarget.textContent === mapper[currentQuestion]) {
        correct += 1;
        if (i < 2) {
          sectionEl[i].style.display = "none";
          sectionEl[i + 1].style.display = "block";
        }
      } else {
        if (i < 2) {
          sectionEl[i].style.display = "none";
          sectionEl[i + 1].style.display = "block";
        }
      }

      if (i === 2) {
        if (correct === 3) {
          let result = document.querySelectorAll(".results-inner")[0].children;
          result[0].textContent = "You are recognized as top JavaScript fan!";
          sectionEl[i].style.display = "none";
          document.getElementById("results").style.display = "block";
        } else {
          let result = document.querySelectorAll(".results-inner")[0].children;
          result[0].textContent = `You have ${correct} right answers`;
          sectionEl[i].style.display = "none";
          document.getElementById("results").style.display = "block";
        }
      }
    }
  }
}
