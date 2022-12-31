import "./style.css";
import CardGame from "../../components/CardGame";

function BoardGame(amount) {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amount);

  return /* html */ ` 
  <section class="board-game">
    ${$htmlBoardGame}
  </section>`;
}

export default BoardGame;
