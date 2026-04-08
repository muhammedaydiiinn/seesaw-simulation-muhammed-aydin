export function renderObjects(objects, container) {
  container.innerHTML = "";

  objects.forEach((obj) => {
    const el = document.createElement("div");

    el.style.position = "absolute";
    el.style.left = `${obj.position}px`;
    el.style.top = "-10px";
    el.style.width = "20px";
    el.style.height = "20px";
    el.style.background = "blue";
    el.style.borderRadius = "50%";

    container.appendChild(el);
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