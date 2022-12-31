import CardGame from "../../components/CardGame";
import "./style.css";

function BoardGame(amount) {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amount);

  return $htmlBoardGame;
}

export default BoardGame;
