/* função que cria um par de objetos */

function CreatePair(icon) {
  return [
    {
      id: randomIcons(icon),
      iconName: icon,
      alt: "Icone do " + icon,
      flipped: false,
    },
    {
      id: randomIcons(icon),
      iconName: icon,
      alt: "Icone do " + icon,
      flipped: false,
    },
  ];
}

function randomIcons(icon) {
  return icon + parseInt(Math.random() * 1000);
}

export default CreatePair;
