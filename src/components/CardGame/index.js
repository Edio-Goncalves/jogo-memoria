import "./style.css";

function CardGame(icon, alt = "&lt/&gt") {
  return /* html */ `
    <article class="card-game">
      <img src="images/${icon}.png" alt="${alt}">
    </article>
    `;
}

export default CardGame;
