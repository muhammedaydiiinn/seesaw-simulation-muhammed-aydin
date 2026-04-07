export function getRandomWeight(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let idCounter = 0;

export function generateId() {
  idCounter += 1;
  return `obj-${idCounter}`;
}