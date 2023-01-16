const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".player");
const spanTimer = document.querySelector(".timer");
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

function createElements(tag, className) {
  const element = document.createElement(tag);
  element.className = className;

  return element;
}

function checkEndGame() {
  const disabled = document.querySelectorAll(".disabledCard");
  if (disabled.length === 20) {
    clearInterval(this.loop);
    alert(
      `Parabéns ${spanPlayer.innerHTML} seu tempo foi ${spanTimer.innerHTML}`
    );
  }
}

function checkCards() {
  const firstIcon = firstCard.getAttribute("data-icon");
  const secondIcon = secondCard.getAttribute("data-icon");

  if (firstIcon === secondIcon) {
    firstCard.firstChild.classList.add("disabledCard");
    secondCard.firstChild.classList.add("disabledCard");

    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(function () {
      firstCard.classList.remove("revealCard");
      secondCard.classList.remove("revealCard");

      firstCard = "";
      secondCard = "";
    }, 400);
  }
}

function revelCard(event) {
  const $target = event.target.closest(".card");

  if ($target.className.includes("revealCard")) {
    return;
  }

  if (firstCard === "") {
    $target.classList.add("revealCard");
    firstCard = $target;
  } else if (secondCard === "") {
    $target.classList.add("revealCard");
    secondCard = $target;

    checkCards();
  }
}

function createCard(icon) {
  const card = createElements("div", "card");
  const front = createElements("div", "face -front");
  const back = createElements("div", "face -back");

  front.style.backgroundImage = `url(../images/${icon}.png)`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revelCard);
  card.setAttribute("data-icon", icon);

  return card;
}

function loadGame() {
  const duplicateIcon = [...icons, ...icons]; /* espalha p array, no caso 2x */
  const shuffledArray = duplicateIcon.sort(function () {
    const randon = Math.random() - 0.5; /* sort ordena cartas, no caso random */
    return randon;
  });

  shuffledArray.forEach(function (icon) {
    const card = createCard(icon);
    grid.appendChild(card);
  });
}

function starTimer() {
  this.loop = setInterval(() => {
    const currentTime = +spanTimer.innerHTML;
    spanTimer.innerHTML = currentTime + 1;
  }, 1000);
}

window.onload = function () {
  spanPlayer.innerHTML = localStorage.getItem("player");
  starTimer();
  loadGame();
};
