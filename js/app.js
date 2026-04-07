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
}

initApp();