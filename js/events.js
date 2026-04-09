import { addObject, state } from "./state.js";
import { generateId, getRandomWeight } from "./utils.js";
import { CONFIG } from "./config.js";
import { playDropSound } from "./sound.js";

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getLocalClickPosition(event, plankElement, currentAngle) {
  const rect = plankElement.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const dx = event.clientX - centerX;
  const dy = event.clientY - centerY;

  const angleInRadians = (-currentAngle * Math.PI) / 180;

  const localXFromCenter =
    dx * Math.cos(angleInRadians) - dy * Math.sin(angleInRadians);

  const localX = localXFromCenter + CONFIG.plankWidth / 2;

  return clamp(localX, 0, CONFIG.plankWidth);
}

export function bindPlankClick(plankElement, onUpdate) {
  plankElement.addEventListener("click", (event) => {
    if (state.paused) return;

    const clickX = getLocalClickPosition(event, plankElement, state.angle);

    const newObject = {
      id: generateId(),
      weight: getRandomWeight(CONFIG.minWeight, CONFIG.maxWeight),
      position: clickX,
    };

    addObject(newObject);
    playDropSound();
    onUpdate();
  });
}