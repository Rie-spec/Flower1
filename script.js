const flowersContainer = document.getElementById('flowers');
const numberOfFlowers = 8;

for (let i = 0; i < numberOfFlowers; i++) {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = `${Math.random() * 80 - 10}vmin`; // random horizontal position
  flower.style.animationDelay = `${Math.random() * 2}s`; // stagger sway

  // Stem
  const line = document.createElement('div');
  line.classList.add('flower__line');

  // Petals container
  const leafs = document.createElement('div');
  leafs.classList.add('flower__leafs');

  // Petals
  for (let j = 0; j < 6; j++) {
    const leaf = document.createElement('div');
    leaf.classList.add('flower__leaf');
    leafs.appendChild(leaf);
  }

  // Center
  const center = document.createElement('div');
  center.classList.add('flower__center');
  leafs.appendChild(center);

  // Letter
  const letter = document.createElement('div');
  letter.classList.add('letter');
  letter.innerHTML = `💌 Happy Valentine's Day 💖 <br> You make my world bloom 🌸`;

  flower.appendChild(line);
  flower.appendChild(leafs);
  flower.appendChild(letter);

  flowersContainer.appendChild(flower);
}
