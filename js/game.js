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

function createElelments(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

/* cria o header e o grid */
function createMainHtml() {
  const header = createElelments("header", "header");
  const grid = createElelments("section", "grid");

  header.className = "header";
  grid.className = "grid";

  main.appendChild(header);
  main.appendChild(grid);

  return grid;
}

/* cria o html do card */
function createCard(icon) {
  const card = createElelments("section", "card");
  const faceFront = createElelments("article", "face front");
  const faceback = createElelments("article", "face back");

  faceFront.style.backgroundImage = `url(../images/${icon}.png)`;

  card.appendChild(faceFront);
  card.appendChild(faceback);
  return card;
}

function boardGame() {
  const duplicateIcons = [...icons, ...icons];
  const shuffledIcons = duplicateIcons.sort(() => Math.random() - 0.5);

  console.log(shuffledIcons);

  const grid = createMainHtml();

  shuffledIcons.forEach(function (icon) {
    const card = createCard(icon);
    grid.appendChild(card);
  });
}
boardGame();
