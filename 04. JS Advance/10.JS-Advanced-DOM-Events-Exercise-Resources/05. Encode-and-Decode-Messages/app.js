function encodeAndDecodeMessages() {
  //take the elements from DOM
  const inputs = document.querySelectorAll("textarea"),
    inputText = inputs[0].value,
    outputTex = inputs[1].value;

  const buttons = document.querySelectorAll("button"),
    encodeBtb = buttons[0],
    decodeBtn = buttons[1];

  //function for encoding
  const encode = function (el) {
    console.log(inputText);
  };

  //function for decoding
  function decode(el) {}

  //add listeners for buttons
  encodeBtb.addEventListener("click", encode);
  decodeBtn.addEventListener("click", decode);
}
