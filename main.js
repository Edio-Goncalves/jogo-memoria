import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import PlayerMoves from "./src/components/PlayerMoves";
import CreateDeck from "./src/components/CreateDeck";
import StartGame from "./src/components/StartGame";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
   ${PlayerMoves()}
   ${BoardGame(4)}
   ${StartGame} 

  `
);
