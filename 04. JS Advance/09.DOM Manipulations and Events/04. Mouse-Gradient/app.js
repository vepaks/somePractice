// function attachGradientEvents() {
//     let gradient = document.getElementById('gradient');
//     let result = document.getElementById('result');
//
//     gradient.addEventListener('mousemove', function (e) {
//         let percent = Math.floor(e.offsetX / (e.target.clientWidth - 1) * 100);
//         result.textContent = `${percent}%`;
//     });
//
//     gradient.addEventListener('mouseout', function () {
//         result.textContent = '';
//     });
// }

function attachGradientEvents() {
  const gradient = document.querySelector("#gradient"),
    result = document.querySelector("#result");
  gradient.addEventListener("mousemove", (el) => {
    let percent = Math.floor((el.offsetX / el.target.clientWidth) * 100);
    result.textContent = `${percent}%`;
  });

  gradient.addEventListener("mouseout", () => {
    result.textContent = "";
  });
}
