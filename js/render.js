export function renderObjects(objects, container) {
  container.innerHTML = "";

  objects.forEach((obj) => {
    const element = document.createElement("div");

    const size = 24 + (obj.weight - 1) * (20 / 9);

    element.className = "seesaw-object";
    element.style.left = `${obj.position}px`;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.top = `${-size + 4}px`;
    element.style.fontSize = `${size < 30 ? 8 : 10}px`;
    element.textContent = `${obj.weight}kg`;

    container.appendChild(element);
  });
}

export function renderRotation(plankElement, angle) {
  plankElement.style.transform = `rotate(${angle}deg)`;
}

export function renderStats(leftEl, rightEl, angleEl, state) {
  leftEl.textContent = `${state.leftWeight} kg`;
  rightEl.textContent = `${state.rightWeight} kg`;
  angleEl.textContent = `${state.angle.toFixed(1)}°`;
}