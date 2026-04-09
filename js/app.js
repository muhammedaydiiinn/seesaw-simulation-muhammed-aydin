import {
  state,
  resetState,
  setState,
  getSerializableState,
} from "./state.js";
import { bindPlankClick } from "./events.js";
import { renderObjects, renderRotation, renderStats } from "./render.js";
import { saveState, loadState, clearSavedState } from "./storage.js";

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

function handleStateChange() {
  renderAll();
  saveState(getSerializableState());
}

function handleReset() {
  resetState();
  clearSavedState();
  renderAll();
}

function restoreState() {
  const savedState = loadState();

  if (!savedState) {
    return;
  }

  setState(savedState);
}

function initApp() {
  restoreState();
  renderAll();

  bindPlankClick(plankElement, handleStateChange);
  resetButtonElement.addEventListener("click", handleReset);
}

initApp();