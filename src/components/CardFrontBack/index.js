import "./style.css";
import CardGame from "../CardGame";

function CardFrontBack() {
  window.cardfrontback = {}; /* cria uma segurança e acessa sempre o desejado */
  window.cardfrontback.flipCard = (event) => {
    const $origin = event.target;
    const $cardFrontBack = $origin.closest(".card-front-back");

    $cardFrontBack.classList.toggle("-active");
  };

  return /* html */ `
    <article  id="card" class="card-front-back"  onclick="cardfrontback.flipCard(event)">
      <div class="card -front">
        ${CardGame("facebook")}
      </div>
      <div class="card -back">
        ${CardGame()}
      </div>
    </article>
`;
}
export default CardFrontBack;
