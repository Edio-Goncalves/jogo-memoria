const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");

function checkInput(event) {
  if (event.target.value.length > 3) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
}

function submitForm(event) {
  event.preventDefault();
  localStorage.setItem("player", input.value);
  location = "../pages/game.html";
}

input.addEventListener("input", checkInput);
form.addEventListener("submit", submitForm);
