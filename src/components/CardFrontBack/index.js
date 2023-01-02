import "./style.css";
import CardGame from "../CardGame";

function CardFrontBack() {
  return /* html */ `
<article class="card-front-back">
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
