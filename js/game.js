const main = document.querySelector(".main");
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

/* CREATE DOUBLE CARD LOGIC */
function revealCard(event) {
  const revealCard = event.target.closest(".card");
  if (revealCard.className.includes("revealCard")) {
    return;
  }

  if (firstCard === "") {
    revealCard.classList.add("revealCard");
    firstCard = revealCard;
  } else if (secondCard === "") {
    revealCard.classList.add("revealCard");
    secondCard = revealCard;
    checkCards();
  }

  console.log(revealCard);
}

/* CREATE ELEMEMENTS*/
function createElements(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

/* CREATE HTML HEADER AND GRID */
function createMainHtml() {
  const header = createElements("section", "header");
  const grid = createElements("section", "grid");

  main.appendChild(header);
  main.appendChild(grid);

  return grid;
}

function checkCards() {}

/* CREATE CARD */
function createCard(icon) {
  const card = createElements("section", "card");
  const front = createElements("article", "face front");
  const back = createElements("article", "face back");

  front.style.backgroundImage = `url(../images/${icon}.png)`;
  card.addEventListener("click", revealCard);

  card.appendChild(front);
  card.appendChild(back);

  return card;
}

/* ADD 20 CARD GAMES AND LOAD GAME */
function loadGame() {
  const grid = createMainHtml();

  const duplicatIcons = [...icons, ...icons];
  const shuffledIcons = duplicatIcons.sort(() => Math.random() - 0.5);

  shuffledIcons.forEach((icon) => {
    const card = createCard(icon);
    grid.appendChild(card);
  });
}

loadGame();
