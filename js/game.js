const main = document.querySelector(".main");

function createElemento(tag, className) {
  const element = document.createElement(tag);
  element.classList = className;
  return element;
}

function createHtml() {
  const header = createElemento("header", "header");
  const grid = createElemento("section", "grid");
  const card = createElemento("section", "card");
  const front = createElemento("article", "face front");
  const back = createElemento("article", "face back");

  card.appendChild(front);
  card.appendChild(back);
  grid.appendChild(card);
  main.appendChild(header);
  main.appendChild(grid);
}
createHtml();
