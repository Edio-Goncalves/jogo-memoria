// const main = document.querySelector(".main");

// const icons = [
//   "facebook",
//   "instagram",
//   "linkedin",
//   "pinterest",
//   "snapchat",
//   "tiktok",
//   "twitter",
//   "wechat",
//   "whatsapp",
//   "youtube",
// ];

// /* create elements */
// function createElements(tag, className) {
//   const element = document.createElement(tag);
//   element.className = className;
//   return element;
// }

// /* create html header and grid */
// function createMainHtml() {
//   const header = createElements("section", "header");
//   const grid = createElements("section", "grid");

//   main.appendChild(header);
//   main.appendChild(grid);

//   return grid;
// }

// function revealCard(event) {
//   const revealCard = event.target.closest(".card");

//   if (revealCard.className.includes(".revealCard")) {
//     return;
//   } else {
//     revealCard.classList.add("revealCard");
//   }
// }

// /* create cards */
// function createCard(icon) {
//   const card = createElements("section", "card");
//   const front = createElements("article", "face front");
//   const back = createElements("article", "face back");

//   front.style.backgroundImage = `url(../images/${icon}.png)`;

//   card.addEventListener("click", revealCard);

//   card.appendChild(front);
//   card.appendChild(back);

//   return card;
// }

// /* add 20 cards and load game */
// function loadGame() {
//   const grid = createMainHtml();

//   const duplicatIcons = [...icons, ...icons];
//   const shuffledIcons = duplicatIcons.sort(() => Math.random() - 0.5);

//   shuffledIcons.forEach((icon) => {
//     const card = createCard(icon);
//     grid.appendChild(card);
//   });
// }

// loadGame();
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

/* cria os elementos html */
function createElements(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

/* cria o html estrutural */
function createHtmlMain() {
  const header = createElements("header", "header");
  const grid = createElements("section", "grid");

  main.appendChild(header);
  main.appendChild(grid);

  return grid;
}

function revealCard(event) {
  const revealCard = event.target.closest(".card");
  revealCard.classList.add("revealCard");
}

/* cria a base das crtas */
function createHtmlCard(icon) {
  const card = createElements("section", "card");
  const faceFront = createElements("article", "face front");
  const faceBack = createElements("article", "face back");

  faceFront.style.backgroundImage = `url(../images/${icon}.png)`;

  card.addEventListener("click", revealCard);

  card.appendChild(faceFront);
  card.appendChild(faceBack);

  return card;
}

/* cria as 20 cartas e inicia o jogo */
function loadGame() {
  const grid = createHtmlMain();

  const duplicatIcons = [...icons, ...icons];
  const shuffledIcons = duplicatIcons.sort(() => Math.random() - 0.5);

  shuffledIcons.forEach(function (icon) {
    const card = createHtmlCard(icon);
    grid.appendChild(card);
  });
}

loadGame();
