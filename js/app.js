import { addObject, state } from "./state.js";

const plankElement = document.getElementById("plank");
const leftWeightElement = document.getElementById("leftWeight");
const rightWeightElement = document.getElementById("rightWeight");
const angleValueElement = document.getElementById("angleValue");
const resetButtonElement = document.getElementById("resetButton");

function initApp() {
  console.log("Seesaw app initialized");

  console.log({
    plankElement,
    leftWeightElement,
    rightWeightElement,
    angleValueElement,
    resetButtonElement,
  });

  addObject({
    id: "test-1",
    weight: 5,
    position: 100,
  });

  addObject({
    id: "test-2",
    weight: 8,
    position: 300,
  });

  console.log("Current state:", state);
}

initApp();