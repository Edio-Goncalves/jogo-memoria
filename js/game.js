const main = document.querySelector(".main");
const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".player");
const spanTimer = document.querySelector(".timer");
const endGame = document.querySelector(".end-game");
const congratulations = document.querySelector(".congratulations");
const btn = document.querySelector(".button");

const icons = [
  "facebook",
  "instagram",
  "linkedin",
  "pinterest",
  "snapchat",
  "tiktok",
  "twitter",
  "wechat",
  "whatsapp",
  "youtube",
];

let firstCard = "";
let secondCard = "";

/* CRIA OS ELEMENTOS DO HTML */

function createElements(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

/* CREATE RELOAD GAME */
function reloadGame() {
  window.location.reload();
}

/* CREATE CONGRATULATION */
function createCongratulation() {
  congratulations.innerHTML = `Parabéns ${spanPlayer.innerHTML}, você atingiu o score de ${spanTimer.innerHTML}`;
  btn.addEventListener("click", reloadGame);
}

/* CHECANDO SE É FINAL DO JOGO */
function checkEndGame() {
  const disabled = document.querySelectorAll(".disabledCard");
  if (disabled.length === 20) {
    clearTimeout(this.loop);
    setInterval(() => {
      endGame.classList.add("visibility");
      createCongratulation();
    }, 1000);
  }
}
/* CHECA AS CARTAS */

function checkCards() {
  const checkFirst = firstCard.getAttribute("data-icon");
  const checkSecond = secondCard.getAttribute("data-icon");

  if (checkFirst === checkSecond) {
    firstCard.firstChild.classList.add("disabledCard");
    secondCard.firstChild.classList.add("disabledCard");

    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("revealCard");
      secondCard.classList.remove("revealCard");
      firstCard = "";
      secondCard = "";
    }, 500);
  }
}

/* REVELA AS CARTAS E CRIA A LOGICA DE 2 CARTAS */
function revealCards(event) {
  const revealCards = event.target.closest(".card");
  if (revealCards.className.includes("revealCard")) {
    return;
  }

  if (firstCard === "") {
    revealCards.classList.add("revealCard");
    firstCard = revealCards;
  } else if (secondCard === "") {
    revealCards.classList.add("revealCard");
    secondCard = revealCards;

    checkCards();
  }
}

/* CEIA A BASE DAS CARTAS */
function createCards(icon) {
  const card = createElements("section", "card");
  const faceFront = createElements("article", "face front");
  const faceBack = createElements("article", "face back");

  faceFront.style.backgroundImage = `url(../images/${icon}.png)`;
  card.addEventListener("click", revealCards);
  card.setAttribute("data-icon", icon);

  card.appendChild(faceFront);
  card.appendChild(faceBack);

  return card;
}

/* INICIA O JOGO */
function loadGame() {
  const duplicate = [...icons, ...icons];
  const shuffleCards = duplicate.sort(() => Math.random() - 0.5);

  shuffleCards.forEach((icon) => {
    const card = createCards(icon);
    grid.appendChild(card);
  });
}

function starTimer() {
  this.loop = setInterval(() => {
    const currentTime = +spanTimer.innerHTML;
    spanTimer.innerHTML = currentTime + 1;
  }, 1000);
}

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem("player");
  starTimer();
  loadGame();
};
