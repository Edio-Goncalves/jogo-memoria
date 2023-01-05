/* função que embaralha todos os objetos */

function ShuffleCards(cc) {
  let currentIndex = cc.length;
  let randomIndex = 0;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [cc[currentIndex], cc[randomIndex]] = [cc[randomIndex], cc[currentIndex]];
  }
}

export default ShuffleCards;
