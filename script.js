"use strict";

const buttons = document.querySelectorAll("button");
const textField = document.querySelector("#textField");

const buttonPressed = (e) => {
  const keyValue = e.currentTarget.getAttribute("data-value");
  textField.textContent += keyValue;
  e.currentTarget.blur();
};

buttons.forEach((el) => {
  el.addEventListener("click", buttonPressed);
});

document.addEventListener("keyup", (event) => {
  if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === 32) {
    textField.textContent += event.key;
  } else if (event.keyCode === 8) {
    textField.textContent = textField.textContent.slice(0, -1);
  }
});
