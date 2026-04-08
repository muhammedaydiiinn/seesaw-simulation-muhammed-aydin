import { state } from "./state.js";
import { bindPlankClick } from "./events.js";
import { renderObjects, renderRotation, renderStats } from "./render.js";

const plankElement = document.getElementById("plank");
const objectsLayerElement = document.getElementById("objectsLayer");
const leftWeightElement = document.getElementById("leftWeight");
const rightWeightElement = document.getElementById("rightWeight");
const angleValueElement = document.getElementById("angleValue");
const resetButtonElement = document.getElementById("resetButton");

export function renderAll() {
  renderObjects(state.objects, objectsLayerElement);
  renderRotation(plankElement, state.angle);
  renderStats(
    leftWeightElement,
    rightWeightElement,
    angleValueElement,
    state
  );
}

function initApp() {
  console.log("Seesaw app initialized");

  console.log({
    plankElement,
    objectsLayerElement,
    leftWeightElement,
    rightWeightElement,
    angleValueElement,
    resetButtonElement,
  });

  bindPlankClick(plankElement, renderAll);
  renderAll();
}

initApp();