import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import PlayerMoves from "./src/components/PlayerMoves";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", PlayerMoves() + BoardGame(20));
