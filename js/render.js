export function renderObjects(objects, container) {
  container.innerHTML = "";

  objects.forEach((obj) => {
    const element = document.createElement("div");

    element.className = "seesaw-object";
    element.style.left = `${obj.position}px`;

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