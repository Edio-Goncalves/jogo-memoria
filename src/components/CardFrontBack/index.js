// import BoardGame from "../../objects/BoardGame";
import CardGame from "../CardGame";

function CardFrontBack() {
  return /* html */ `
<article class="card-front-back">
    ${CardGame("facebook")}
    ${CardGame("&lt/&gt")}
</article>
`;
}
export default CardFrontBack;
