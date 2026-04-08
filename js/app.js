import { addObject, state } from "./state.js";
import { bindPlankClick } from "./events.js";

const plankElement = document.getElementById("plank");
const leftWeightElement = document.getElementById("leftWeight");
const rightWeightElement = document.getElementById("rightWeight");
const angleValueElement = document.getElementById("angleValue");
const resetButtonElement = document.getElementById("resetButton");

function initApp() {
  bindPlankClick(plankElement);
}

initApp();