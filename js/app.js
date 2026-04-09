import {
  state,
  resetState,
  setState,
  getSerializableState,
} from "./state.js";
import { CONFIG } from "./config.js";
import { bindPlankClick } from "./events.js";
import { renderObjects, renderRotation, renderStats, renderScale } from "./render.js";
import { saveState, loadState, clearSavedState } from "./storage.js";

const plankElement = document.getElementById("plank");
const objectsLayerElement = document.getElementById("objectsLayer");
const leftWeightElement = document.getElementById("leftWeight");
const rightWeightElement = document.getElementById("rightWeight");
const angleValueElement = document.getElementById("angleValue");
const scaleLayerElement = document.getElementById("scaleLayer");
const resetButtonElement = document.getElementById("resetButton");
const pauseButtonElement = document.getElementById("pauseButton");

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

function handlePause() {
  state.paused = !state.paused;
  pauseButtonElement.textContent = state.paused ? "Resume" : "Pause";
  plankElement.style.cursor = state.paused ? "not-allowed" : "pointer";
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
  renderScale(scaleLayerElement, CONFIG.plankWidth);
  renderAll();

  bindPlankClick(plankElement, handleStateChange);
  pauseButtonElement.addEventListener("click", handlePause);
  resetButtonElement.addEventListener("click", handleReset);
}

initApp();