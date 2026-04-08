import { addObject } from "./state.js";
import { getRandomWeight, generateId } from "./utils.js";

export function bindPlankClick(plankElement) {
  plankElement.addEventListener("click", (event) => {
    const rect = plankElement.getBoundingClientRect();
    const clickX = event.clientX - rect.left;

    const weight = getRandomWeight(1, 10);

    const newObject = {
      id: generateId(),
      weight,
      position: clickX,
    };

    addObject(newObject);

    console.log("New object:", newObject);
  });
}