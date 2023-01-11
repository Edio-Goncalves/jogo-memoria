const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");

function validateInput(event) {
  if (event.target.value.length > 3) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
}

function handleSubmit(event) {
  event.preventDefault();
  localStorage.setItem("player", input.value); /* armazena "input.value" */
  window.location = "pages/game.html"; /* ao executar acessa o local*/
}

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
