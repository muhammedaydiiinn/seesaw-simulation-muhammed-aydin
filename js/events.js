import { addObject } from "./state.js";
import { generateId, getRandomWeight } from "./utils.js";
import { CONFIG } from "./config.js";

export function bindPlankClick(plankElement, onUpdate) {
  plankElement.addEventListener("click", (event) => {
    const rect = plankElement.getBoundingClientRect();
    const clickX = event.clientX - rect.left;

    const newObject = {
      id: generateId(),
      weight: getRandomWeight(CONFIG.minWeight, CONFIG.maxWeight),
      position: clickX,
    };

    addObject(newObject);
    onUpdate();
  });
}