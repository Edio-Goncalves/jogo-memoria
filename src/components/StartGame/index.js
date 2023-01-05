import CreateDeck from "../CreateDeck";
import ShuffleCards from "../CreateDeck/shuffle";

let icons = [
  "facebook",
  "instagram",
  "linkedin",
  "pinterest",
  "snapchat",
  "tiktok",
  "twitter",
  "wechat",
  "whatsapp",
  "youtube",
];

StartGame();

function StartGame() {
  let cards = CreateDeck(icons);
  ShuffleCards(cards);
  console.log(cards);
}

export default StartGame;
