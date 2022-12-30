import "./reset.css";
import CardGame from "./src/components/CardGame";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);
