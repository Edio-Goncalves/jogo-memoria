import CreatePair from "./pairs";

function CreateDeck(icons) {
  const cards = [];
  for (let card of icons) {
    cards.push(CreatePair(card));
  }
  return cards.flatMap((num) => num);
}

export default CreateDeck;
