const inputEvent = document.querySelector(".login-input");
const buttonEvent = document.querySelector(".login-button");
const formEvent = document.querySelector(".login-form");

function checkInput(event) {
  if (event.target.value.length > 3) {
    buttonEvent.removeAttribute("disabled");
  } else {
    buttonEvent.setAttribute("disabled", "");
  }
}

function submitButton(event) {
  event.preventDefault();
  localStorage.setItem("player", inputEvent.value);
  window.location = "/pages/game.html";
}

inputEvent.addEventListener("input", checkInput);
formEvent.addEventListener("submit", submitButton);
